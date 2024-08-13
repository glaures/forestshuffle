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
          <div class="d-flex align-items-center justify-content-center ps-2 text-end">
            <img src="/img/points.png" height="20"/>&nbsp;
            {{ forest.points }}
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-2">
      <a :href="'https://app.bgstatsapp.com/createPlay.html?data=' + bgStatsData" target="_bgStats">
        <img
            src="https://i0.wp.com/www.bgstatsapp.com/wp-content/uploads/2020/11/Post-to-BG-Stats.png?resize=133%2C34&amp;ssl=1"
            alt="" width="133" height="34"
            srcset="https://i0.wp.com/www.bgstatsapp.com/wp-content/uploads/2020/11/Post-to-BG-Stats.png?w=548&amp;ssl=1 548w, https://i0.wp.com/www.bgstatsapp.com/wp-content/uploads/2020/11/Post-to-BG-Stats.png?resize=300%2C77&amp;ssl=1 300w"
            sizes="(max-width: 133px) 100vw, 133px">
      </a>
    </div>
  </div>
</template>

<script>
import {useGameStore} from "@/stores/game-store.js";
import {useForestsStore} from "@/stores/forests-store.js";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export default {
  name: "Ranking",
  components: {FontAwesomeIcon},
  emits: ['toggleStandings', 'startNewGame', 'resetPlayers'],
  data() {
    return {
      time: new Date(),
      interval: null
    }
  },
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
    },
    playingTimeInMinutes() {
      return Math.trunc((this.time.getTime() - useGameStore().startTime.getTime()) / 1000 / 60)
    },
    bgStatsData() {
      const players = []
      for (let forest of useForestsStore().forests) {
        players.push({
          startPlayer: useForestsStore().forests.indexOf(forest) === 0,
          name: forest.playerName,
          rank: forest.rank,
          score: forest.points,
          winner: forest.rank === 1,
          sourcePlayerId: forest.playerName
        })
      }
      const bgStatsData = {
        board: "",
        durationMin: this.playingTimeInMinutes,
        comments: "",
        game: {
          bggId: 391163,
          highestWins: true,
          name: this.$t('forestShuffle'),
          noPoints: false,
          sourceGameId: "Forest Shuffle",
        },
        players: players,
        playDate: formatDate(new Date()),
        sourceName: this.$t('meta.title'),
        sourcePlayId: new Date().getTime()
      }
      return encodeURIComponent(JSON.stringify(bgStatsData))
    }
  },
  methods: {
    selectPlayer(playerName) {
      useGameStore().selectPlayer(playerName)
      this.$emit('toggleStandings')
    }
  },
  mounted() {
    // Setzt ein Intervall, um das `time` Datenfeld jede Sekunde zu aktualisieren
    this.interval = setInterval(() => {
      this.time = new Date();
    }, 10000);
  },
  beforeDestroy() {
    // Räumt das Intervall auf, wenn die Komponente zerstört wird
    clearInterval(this.interval);
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