<template>
  <div class="header d-flex align-items-center py-2 px-3">
    <div class="pe-2 mx-auto d-flex align-items-center"
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
      <div class="current-player-text fs-1 d-flex align-items-center">
        <img src="/img/points.png" alt="points" height="34"/>&nbsp;{{ points }}
      </div>
    </div>
  </div>
  <div id="navigation" class="offcanvas offcanvas-start z-9999" tabindex="-1">
    <div class="offcanvas-header">
      <button type="button" class="btn-close text-reset" @click="closeMenu" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="list-group">
        <div v-for="(forest, idx) of forests" class="list-group-item d-flex align-items-center"
             :class="{'active': forest.playerName === currentPlayer.name}"
             @click="selectPlayer(forest.playerName)">
          <span>{{ forest.playerName }}</span>
          <span class="ms-2 flex-grow-1 text-end fw-bold text-decoration-none">
            <img src="/img/points.png" alt="points" height="28"/>&nbsp;{{ forest.points }}
          </span>
        </div>
      </div>
      <div class="mt-2 mb-2 text-center">
        <button v-if="players.length < 5" class="btn btn-sm btn-primary" @click="addPlayer">
          <font-awesome-icon icon="user-plus"/>
        </button>
      </div>
      <div class="d-flex w-100 justify-content-start align-items-center px-5">
        <input class="form-check form-check-input bg-primary" type="checkbox" :checked="distributedScoring"
               @input="toggleDistributedScoring"/>
        <div class="form-check-label ms-2 user-select-none text-wrap" @click="toggleDistributedScoring">
          {{ $t('distributedScoring') }}
        </div>
      </div>
      <div class="d-flex mt-5 w-100 justify-content-left align-items-center px-5">
        <input class="form-check form-check-input bg-primary" type="checkbox" :checked="alpineExpansion"
               @input="toggleAlpineExpansion"/>
        <div class="form-check-label ms-2 user-select-none" @click="toggleAlpineExpansion">
          <img src="/img/symbols/alps.png" alt="alps" height="24"/>&nbsp;{{ $t('alpineExpansion') }}
        </div>
      </div>
      <div class="d-flex mt-3 w-100 justify-content-left align-items-center px-5">
        <input class="form-check form-check-input bg-primary" type="checkbox" :checked="woodlandEdgeExpansion"
               @input="toggleWoodlandEdgeExpansion"/>
        <div class="form-check-label ms-2 user-select-none" @click="toggleWoodlandEdgeExpansion">
          <img src="/img/symbols/woodlandEdge.png" alt="woodlandEdge" height="24"/>&nbsp;{{ $t('woodlandEdgeExpansion') }}
        </div>
      </div>
      <div class="d-flex mt-3 w-100 justify-content-start align-items-center px-5">
        <input class="form-check form-check-input bg-primary" type="checkbox" :checked="hobbyPromo"
               @input="toggleHobbyPromo"/>
        <div class="form-check-label ms-2 user-select-none text-wrap" @click="toggleHobbyPromo">
          {{ $t('hobbyPromo') }}
        </div>
      </div>
      <div class="d-flex mt-3 w-100 justify-content-start align-items-center px-5">
        <input class="form-check form-check-input bg-primary" type="checkbox" :checked="spiel24Promo"
               @input="toggleSpiel24Promo"/>
        <div class="form-check-label ms-2 user-select-none text-wrap" @click="toggleSpiel24Promo">
          {{ $t('spiel24Promo') }}
        </div>
      </div>
      <div class="d-flex mt-3 w-100 justify-content-start align-items-center px-5">
        <input class="form-check form-check-input bg-primary" type="checkbox" :checked="maretakPromo"
               @input="toggleMaretakPromo"/>
        <div class="form-check-label ms-2 user-select-none text-wrap" @click="toggleMaretakPromo">
          {{ $t('maretakPromo') }}
        </div>
      </div>
      <div class="d-flex mt-3 w-100 justify-content-start align-items-center px-5">
        <input class="form-check form-check-input bg-primary" type="checkbox" :checked="duererExpansion"
               @input="toggleDuererExpansion"/>
        <div class="form-check-label ms-2 user-select-none text-wrap" @click="toggleDuererExpansion">
          {{ $t('duererExpansion') }}
        </div>
      </div>
      <div class="d-flex justify-content-center w-100 mt-5">
        <span class="flag-icon flag-icon-gb-eng cursor-pointer" @click="changeLanguage('en')"/>
        <span class="ms-2 flag-icon flag-icon-de cursor-pointer" @click="changeLanguage('de')"/>
        <span class="ms-2 flag-icon flag-icon-fr cursor-pointer" @click="changeLanguage('fr')"/>
        <span class="ms-2 flag-icon flag-icon-es cursor-pointer" @click="changeLanguage('es')"/>
        <span class="ms-2 flag-icon flag-icon-it cursor-pointer" @click="changeLanguage('it')"/>
        <span class="ms-2 flag-icon flag-icon-pl cursor-pointer" @click="changeLanguage('pl')"/>
        <span class="ms-2 flag-icon flag-icon-ru cursor-pointer" @click="changeLanguage('ru')"/>
        <span class="ms-2 flag-icon flag-icon-cn cursor-pointer" @click="changeLanguage('cn')"/>
        <span class="ms-2 flag-icon flag-icon-nl cursor-pointer" @click="changeLanguage('nl')"/>
        <span class="ms-2 flag-icon flag-icon-bg cursor-pointer" @click="changeLanguage('bg')"/>
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
    distributedScoring() {
      return useGameStore().distributedScoring
    },
    alpineExpansion() {
      return useGameStore().alpineExpansion
    },
    woodlandEdgeExpansion() {
      return useGameStore().woodlandEdgeExpansion
    },
    duererExpansion(){
      return useGameStore().duererExpansion
    },
    hobbyPromo(){
      return useGameStore().hobbyPromo
    },
    spiel24Promo(){
      return useGameStore().spiel24Promo
    },
    maretakPromo(){
      return useGameStore().maretakPromo
    },
    forests() {
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
    toggleDistributedScoring() {
      return useForestsStore().toggleDistributedScoring()
    },
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
    toggleWoodlandEdgeExpansion() {
      useGameStore().toggleWoodlandEdgeExpansion()
      event('woodlandEdgeExpansion', {newState: this.woodlandEdgeExpansion})
    },
    toggleDuererExpansion() {
      useGameStore().toggleDuererExpansion()
      event('duererExpansionToggled', {newState: this.duererExpansion})
    },
    toggleHobbyPromo() {
      useGameStore().toggleHobbyPromo()
      event('hobbyPromoToggled', {newState: this.hobbyPromo})
    },
    toggleSpiel24Promo() {
      useGameStore().toggleSpiel24Promo()
      event('spiel24Toggled', {newState: this.spiel24Promo})
    },
    toggleMaretakPromo() {
      useGameStore().toggleMaretakPromo()
      event('maretakToggled', {newState: this.maretakPromo})
    },
    changeLanguage(newLang) {
      this.$i18n.locale = newLang
      localStorage.setItem('preferredLanguage', newLang)
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