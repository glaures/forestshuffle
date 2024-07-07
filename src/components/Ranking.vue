<template>
  <div class="container">
    <div class="list-group mt-2">
      <div v-for="(forest, idx) in forests"
           class="list-group-item">
        <div class="d-flex justify-content-between">
          <div class="pe-2 rank">{{ forest.rank > idx ? `${forest.rank}.` : '' }}</div>
          <div @click="selectPlayer(forest.playerName)"
               class="flex-grow-1 fw-bold">{{ forest.playerName }}
          </div>
          <div class="ps-2 text-end">{{ forest.points }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useGameStore} from "@/stores/game-store.js";
import {useForestsStore} from "@/stores/forests-store.js";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "Ranking",
  components: {FontAwesomeIcon},
  emits: ['toggleStandings', 'startNewGame', 'resetPlayers'],
  computed: {
    forests() {
      const sortedForests = [...useForestsStore().forests].sort((f1, f2) => f2.points - f1.points)
      let currentRank = 1
      let lastPoints = 9999
      return sortedForests.map(forest => {
        if (forest.points < lastPoints)
          currentRank = sortedForests.findIndex(f => f.playerName === forest.playerName) + 1
        lastPoints = forest.points
        return {
          ...forest,
          rank: currentRank
        }
      })
    }
  },
  methods: {
    selectPlayer(playerName) {
      useGameStore().selectPlayer(playerName)
      this.$emit('toggleStandings')
    }
  }
}
</script>


<style scoped>
.rank {
  min-width: 20px;
  width: 20px;
  max-width: 20px;
}
</style>