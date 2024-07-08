<template>
  <div class="header d-flex align-items-center py-2">
    <div class="px-2 mx-auto"
         data-bs-toggle="offcanvas" data-bs-target="#navigation"
         @click="openMenu">
      <font-awesome-icon icon="bars" class="text-light p-1 border border-light rounded-1"/>
    </div>
    <div v-if="currentPlayer"
         class="d-flex justify-content-between align-items-center w-100 pe-2">
      <div v-if="!editing">
        <span class="current-player-text fs-1"
              @click="editing = true">
          {{ currentPlayer.name }}
        </span>
        <span class="ms-1 text-light cursor-pointer">
          <font-awesome-icon icon="edit" size="xs" @click="editing = true"/>
        </span>
      </div>
      <div v-else class="d-flex">
        <input id="playerNameInput" type="text" :value="currentPlayer.name" class="form-control"
               onfocus="this.select();"
               onclick="this.select();"
               @keydown.enter="updatePlayerName"/>
        <button class="btn btn-outline-light btn-sm ms-1" @click="updatePlayerName">OK</button>
      </div>
      <div class="current-player-text fs-1">
        {{ points }}
      </div>
    </div>
  </div>
  <div id="navigation" class="offcanvas offcanvas-start z-9999" tabindex="-1">
    <div class="offcanvas-header">
      <button type="button" class="btn-close text-reset" @click="closeMenu" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="list-group">
        <div v-for="(forest, idx) of forests" class="list-group-item d-flex"
             :class="{'active': forest.playerName === currentPlayer.name}"
             @click="selectPlayer(forest.playerName)">
          <span>{{ forest.playerName }}</span>
          <span class="ms-2 flex-grow-1 text-end fw-bold text-decoration-none">{{ forest.points }}</span>
        </div>
      </div>
      <div class="mt-2 mb-5 text-center">
        <button v-if="players.length < 5" class="btn btn-sm btn-primary" @click="addPlayer">
          <font-awesome-icon icon="user-plus"/>
        </button>
      </div>
      <div class="d-flex mt-3 w-100 justify-content-center" @click="toggleAlpineExpansion">
        <input class="form-check form-check-input bg-primary" type="checkbox" :checked="alpineExpansion"
               @input="toggleAlpineExpansion"/>
        <div class="form-check-label ms-2 user-select-none">
          <img src="/img/symbols/alps.png" alt="alps" height="24"/>{{ $t('alpineExpansion') }}
        </div>
      </div>
      <div class="d-flex justify-content-center w-100 mt-5">
        <span class="flag-icon flag-icon-gb-eng cursor-pointer" @click="changeLanguage('en')"/>
        <span class="ms-2 flag-icon flag-icon-de cursor-pointer" @click="changeLanguage('de')"/>
        <span class="ms-2 flag-icon flag-icon-fr cursor-pointer" @click="changeLanguage('fr')"/>
        <span class="ms-2 flag-icon flag-icon-it cursor-pointer" @click="changeLanguage('it')"/>
      </div>
      <div class="mt-5 d-block btn btn-danger cursor-pointer" @click="startNewGame">{{ $t('startNewGame') }}</div>
      <div class="mt-2 d-block btn btn-danger" @click="resetPlayers">{{ $t('resetPlayers') }}</div>
    </div>
  </div>
  <FloatingButtons @add-player="addPlayer"
                   @toggle-standings="$emit('toggleStandings')"/>
</template>

<script>
import {useGameStore} from "@/stores/game-store.js";
import {useForestsStore} from "@/stores/forests-store.js";
import {event} from "vue-gtag";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {Offcanvas} from 'bootstrap'
import FloatingButtons from "@/components/FloatingButtons.vue";

export default {
  name: "NavigationAndButtons",
  components: {FloatingButtons, FontAwesomeIcon},
  emits: ['toggleStandings', 'startNewGame', 'resetPlayers'],
  data() {
    return {
      editing: false
    }
  },
  computed: {
    alpineExpansion() {
      return useGameStore().alpineExpansion
    },
    forests(){
      return useForestsStore().forests
    },
    players() {
      return useGameStore().players.map(p => {
        return {
          ...p,
          points: useForestsStore().getForestByPlayerName(p.name).points
        }
      })
    },
    currentPlayer() {
      return useGameStore().currentPlayer
    },
    playerNumber() {
      return useGameStore().players.findIndex(p => p.name === this.currentPlayer.name) + 1
    },
    points() {
      return useForestsStore().getForestByPlayerName(this.currentPlayer.name).points
    }
  },
  methods: {
    closeMenu() {
      const navigationElem = Offcanvas.getInstance(document.getElementById('navigation'))
      if (navigationElem)
        navigationElem.hide()
    },
    addPlayer() {
      const playerName = this.$t('player') + ' ' + (this.players.length + 1)
      useForestsStore().addForest(playerName)
      useGameStore().addPlayer(playerName)
      this.selectPlayer(playerName)
      event('playerAdded', {totalPlayers: useGameStore().players.length})
    },
    selectPlayer(playerName) {
      useGameStore().selectPlayer(playerName)
      this.closeMenu()
    },
    updatePlayerName() {
      this.editing = false
      const currentName = this.currentPlayer.name
      const newName = document.getElementById("playerNameInput").value
      useGameStore().updatePlayerName(currentName, newName)
      useForestsStore().getForestByPlayerName(currentName).playerName = newName
      event('playerNameUpdated', {name: newName})
    },
    startNewGame() {
      this.$emit('startNewGame')
      this.closeMenu()
    },
    resetPlayers() {
      this.$emit('resetPlayers')
      this.closeMenu()
    },
    toggleAlpineExpansion() {
      useGameStore().toggleAlpineExpansion()
      event('alpineExpansionToggled', {newState: this.alpineExpansion})
    },
    changeLanguage(newLang) {
      this.$i18n.locale = newLang
      event('languageChanged', {language: newLang})
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;
  background-image: url("/img/top-forest.png");
  background-size: 400px;
  background-repeat: repeat-x;
  background-position: bottom;
  z-index: 999;
}

.current-player-text {
  text-shadow: 1px 1px black;
  font-weight: bold;
  color: white;
}

</style>