<script>
import {useGameStore} from "@/stores/game-store.js";
import {useForestsStore} from "@/stores/forests-store.js";

export default {
  name: "PlayerNavigation",
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
    }
  }
}
</script>

<template>
  <div class="wrapper text-light ">
    <div class="player-nav d-flex">
      <div v-for="player in players" class="ms-1 player-nav-item border border-light text-light"
           @click="selectPlayer(player.name)">
        <span :class="{underline: player.name === currentPlayer.name}">{{ player.name }}</span><span
          class="ms-2 fw-bold">{{ player.points }}</span>
      </div>
      <button v-if="players.length < 5" class="btn btn-sm btn-light py-0 ms-1 z-99" @click="addPlayer">&plus;</button>
    </div>
    <div v-if="currentPlayer"
         class="current-player d-flex justify-content-between px-3 fs-1 fw-bold position-absolute w-100">
      <div>
        {{ currentPlayer.name }}
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
  min-height: 120px;
  height: 120px;
  width: 100%;
  min-width: 100%;
  background-image: url("./img/top-forest.png");
  background-size: cover;
  background-repeat: repeat-x;
  background-position: bottom;
  z-index: 9999;
}

.current-player {
  position: absolute;
  bottom: 4vh;
}

.player-nav {
  position: relative;
  min-width: 100%;
  width: 100%;
  justify-content: center;
  font-size: 12px;
}

.player-nav-item {
  padding: 4px;
  cursor: pointer;
  background-color: #10131588;
}

.player-nav-item:hover {
  background-color: #10131500;
  text-decoration: underline;
}

.underline {
  text-decoration: underline;
}

</style>