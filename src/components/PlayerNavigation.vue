<script>
import {useGameStore} from "@/stores/game-store.js";
import {useForestsStore} from "@/stores/forests-store.js";

export default {
  name: "PlayerNavigation",
  data() {
    return {
      editing: false
    }
  },
  computed: {
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
    points() {
      return useForestsStore().getForestByPlayerName(this.currentPlayer.name).points
    }
  },
  methods: {
    addPlayer() {
      const playerName = this.$t('player') + ' ' + (this.players.length + 1)
      useForestsStore().addForest(playerName)
      useGameStore().addPlayer(playerName)
      useGameStore().selectPlayer(playerName)
    },
    selectPlayer(playerName) {
      useGameStore().selectPlayer(playerName)
    },
    updatePlayerName() {
      this.editing = false
      const newName = document.getElementById("playerNameInput").value
      const currentName = useGameStore().currentPlayer.name
      useForestsStore().getForestByPlayerName(currentName).playerName = newName
      useGameStore().currentPlayer.name = newName
    }
  }
}
</script>

<template>
  <div class="wrapper text-light">
    <div class="player-nav d-flex">
      <div v-for="(player, idx) in players" class="player-nav-item border-light text-light"
           :class="{'border-start': idx > 0}"
           @click="selectPlayer(player.name)">
        <span :class="{'text-decoration-underline': player.name === currentPlayer.name}">{{ player.name }}</span>
        <span class="ms-2 fw-bold text-decoration-none">{{ player.points }}</span>
      </div>
      <button v-if="players.length < 5" class="btn btn-sm btn-light py-0 ms-1 z-99" @click="addPlayer">&plus;</button>
    </div>
    <div v-if="currentPlayer"
         class="current-player d-flex justify-content-between px-3 fs-1 fw-bold position-absolute w-100">
      <div v-if="!editing"
           @click="editing = true">
        {{ currentPlayer.name }}
      </div>
      <div v-else class="d-flex">
        <input id="playerNameInput" type="text" :value="currentPlayer.name" class="form-control"
               onfocus="this.select();"
               onclick="this.select();"/>
        <button class="btn btn-outline-light btn-sm ms-1" @click="updatePlayerName">OK</button>
      </div>
      <div>
        {{ points }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  position: fixed;
  top: 0;
  min-height: 100px;
  height: 100px;
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;
  background-image: url("/img/top-forest.png");
  background-size: 400px;
  background-repeat: repeat-x;
  background-position: bottom;
  z-index: 999;
}


.current-player {
  position: absolute;
  bottom: 4vh;
  text-shadow: 3px 3px black;
}

.player-nav {
  position: relative;
  min-width: 100%;
  width: 100%;
  justify-content: center;
  font-size: 10px;
}

.player-nav-item {
  padding: 4px;
  cursor: pointer;
  background-color: #10131588;
}

.player-nav-item:hover {
  background-color: #10131500;
}

</style>