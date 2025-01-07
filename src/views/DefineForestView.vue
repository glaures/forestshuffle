<template>
  <NavigationAndButtons @toggle-standings="toggleRankingsModal"
                        @start-new-game="startNewGame"
                        @reset-players="resetPlayers"/>
  <div v-if="forest" class="container mb-5">
    <div class="distance-keeper position-relative"></div>
    <CardAmountEditorList :cards="trees"
                          :forest="forest"
                          symbol="tree"
                          heading="trees">
    </CardAmountEditorList>
    <CardAmountEditorList :cards="shrubs"
                          :forest="forest"
                          symbol="shrub"
                          heading="shrubs"
                          class="mt-4">
    </CardAmountEditorList>

    <div class="d-flex align-items-center mt-4 border-primary border-bottom">
      <div
          class="border border-2 bg-secondary text-light border-light rounded justify-content-center align-items-center d-flex me-1 position-icon">
        <font-awesome-icon icon="arrow-up"/>
      </div>
      <span class="ms-2 fs-2">{{ $t('tops') }}</span>
    </div>
    <CardAmountEditorList class="mt-1"
                          :cards="birds"
                          :forest="forest"
                          symbol="bird"
                          heading="birds"/>
    <CardAmountEditorList class="mt-4"
                          :cards="butterflies"
                          :forest="forest"
                          symbol="butterfly"
                          heading="butterflies"/>
    <CardAmountEditorList class="mt-4"
                          :cards="others"
                          :forest="forest"
                          symbol="pawedAnimal"
                          heading="pawedAnimals"/>
    <CardAmountEditorList class="mt-4"
                          :cards="plantsTop"
                          :forest="forest"
                          symbol="plant"
                          heading="plants"/>

    <div class="d-flex align-items-center mt-4 border-primary border-bottom">
      <div
          class="border border-2 bg-warning text-light border-light rounded justify-content-center align-items-center d-flex me-1 position-icon">
        <font-awesome-icon icon="arrow-down"/>
      </div>
      <span class="ms-2 fs-2">{{ $t('bottoms') }}</span>
    </div>

    <CardAmountEditorList class="mt-1"
                          :cards="plants"
                          :forest="forest"
                          symbol="plant"
                          heading="plants"/>
    <CardAmountEditorList class="mt-4"
                          :cards="mushrooms"
                          :forest="forest"
                          symbol="mushroom"
                          heading="mushrooms"/>
    <CardAmountEditorList class="mt-4"
                          :cards="amphibians"
                          :forest="forest"
                          symbol="amphibian"
                          heading="amphibians"/>
    <CardAmountEditorList class="mt-4"
                          :cards="insectsBottom"
                          :forest="forest"
                          symbol="insect"
                          heading="insects"/>
    <CardAmountEditorList class="mt-4"
                          :cards="pawedBottom"
                          :forest="forest"
                          symbol="pawedAnimal"
                          heading="pawedAnimals"/>

    <div class="d-flex align-items-center mt-4 border-primary border-bottom">
      <div
          class="border border-2 bg-info text-light border-light rounded justify-content-center align-items-center d-flex me-1 position-icon">
        <font-awesome-icon icon="arrows-left-right"/>
      </div>
      <span class="ms-2 fs-2">{{ $t('sides') }}</span>
    </div>
    <CardAmountEditorList v-if="birdsSide.length > 0"
                          class="mt-2"
                          :cards="birdsSide"
                          :forest="forest"
                          symbol="bird"
                          heading="birds"/>
    <CardAmountEditorList class="mt-2"
                          :cards="insectsSide"
                          :forest="forest"
                          symbol="insect"
                          heading="insects"/>
    <CardAmountEditorList class="mt-4"
                          :cards="bats"
                          :forest="forest"
                          symbol="bat"
                          heading="bats"/>
    <CardAmountEditorList class="mt-4"
                          :cards="pawedSide"
                          :forest="forest"
                          symbol="pawedAnimal"
                          heading="pawedAnimals"/>
    <CardAmountEditorList class="mt-4"
                          :cards="deerAndCloven"
                          :forest="forest"
                          symbol="deer"
                          symbol2="clovenHoofedAnimal"
                          heading="deerAndCloven"/>
    <div class="mt-4">
      <div class="text-center">
        <img :src="'./img/cave.png'" :alt="$t('cave')" @click="setCaveCount(forest.caveCount + 1)"/>
      </div>
      <div class="text-center">
        <input :value="forest.caveCount"
               @input="setCaveCount(Number($event.target.value))"
               type="number"
               class="form-control text-center fs-5"
               min="0"
               onfocus="this.select();"
               onclick="this.select();">
      </div>
    </div>
    <div class="px-4 mt-3">
      <ForestSummary :forest="forest"/>
    </div>
  </div>
  <div id="standingsModal" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <div class="fs-1">{{ $t('ranking') }}</div>
          <button type="button" class="btn-close" aria-label="Close" @click="toggleRankingsModal(true)"></button>
        </div>
        <div class="modal-body">
          <Ranking @toggle-standings="toggleRankingsModal"/>
        </div>
        <div class="modal-footer d-flex justify-content-between">
          <div>
            <button class="d-block btn btn-danger btn-sm" @click="startNewGame">
              {{ $t('startNewGame') }}
            </button>
            <button class="mt-1 btn btn-danger btn-sm" @click="resetPlayers">
              {{ $t('resetPlayers') }}
            </button>
          </div>
          <div class="flex-grow-1 text-end">
            <button class="btn btn-primary" @click="toggleRankingsModal(true)">OK</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardAmountEditor from "@/components/CardAmountEditor.vue";
import {useForestsStore} from "@/stores/forests-store.js";
import CardAmountEditorList from "@/components/CardAmountEditorList.vue";
import {useGameStore} from "@/stores/game-store.js";
import {event} from "vue-gtag";
import NavigationAndButtons from "@/components/NavigationAndButtons.vue";
import FloatingButtons from "@/components/FloatingButtons.vue";
import Ranking from "@/components/Ranking.vue";
import {Modal} from "bootstrap"
import ForestSummary from "@/components/ForestSummary.vue";

export default {
  components: {ForestSummary, Ranking, FloatingButtons, NavigationAndButtons, CardAmountEditorList, CardAmountEditor},
  computed: {
    playerName() {
      return useGameStore().currentPlayer?.name
    },
    forest() {
      return useForestsStore().getForestByPlayerName(this.playerName)
    },
    cards() {
      return useForestsStore().getForestByPlayerName(this.playerName).cards
    },
    trees() {
      return this.cards.filter(c => c.symbols.indexOf('tree') >= 0 && !(c.hide && c.hide(useGameStore())))
    },
    shrubs() {
      return this.cards.filter(c => c.symbols.indexOf('shrub') >= 0 && !(c.hide && c.hide(useGameStore())))
    },
    birds() {
      return this.cards.filter(c => c.symbols.indexOf('bird') >= 0 && !(c.hide && c.hide(useGameStore())))
    },
    butterflies() {
      return this.cards.filter(c => c.symbols.indexOf('butterfly') >= 0 && !(c.hide && c.hide(useGameStore())))
    },
    others() {
      return this.forest.cards.filter(c => c.name === 'redSquirrel' && !(c.hide && c.hide(useGameStore())))
    },
    plants() {
      return this.cards.filter(c => c.symbols.indexOf('plant') >= 0 && c.position === 'bottom' && !(c.hide && c.hide(useGameStore())))
    },
    plantsTop(){
      return this.cards.filter(c => c.symbols.indexOf('plant') >= 0 && c.position === 'top' && !(c.hide && c.hide(useGameStore())))
    },
    mushrooms() {
      return this.cards.filter(c => c.symbols.indexOf('mushroom') >= 0 && !(c.hide && c.hide(useGameStore())))
    },
    amphibians() {
      return this.cards.filter(c => c.symbols.indexOf('amphibian') >= 0 && !(c.hide && c.hide(useGameStore())))
    },
    insectsBottom() {
      return this.cards.filter(c => c.symbols.indexOf('insect') >= 0 && c.position === 'bottom' && !(c.hide && c.hide(useGameStore())))
    },
    pawedBottom() {
      return this.cards.filter(c => c.symbols.indexOf('pawedAnimal') >= 0 && c.position === 'bottom' && !(c.hide && c.hide(useGameStore())))
    },
    birdsSide() {
      return this.cards.filter(c => c.symbols.indexOf('bird') >= 0 && c.position === 'side' && !(c.hide && c.hide(useGameStore())))
    },
    insectsSide() {
      return this.cards.filter(c => c.symbols.indexOf('insect') >= 0 && c.position === 'side' && !(c.hide && c.hide(useGameStore())))
    },
    bats() {
      return this.cards.filter(c => c.symbols.indexOf('bat') >= 0 && !(c.hide && c.hide(useGameStore())))
    },
    deerAndCloven() {
      return this.cards.filter(c => (c.symbols.indexOf('deer') >= 0 || c.symbols.indexOf('clovenHoofedAnimal') >= 0) && !(c.hide && c.hide(useGameStore())))
    },
    pawedSide() {
      return this.cards.filter(c => c.symbols.indexOf('pawedAnimal') >= 0 && c.position === 'side' && !(c.hide && c.hide(useGameStore())))
    },
    points() {
      return useForestsStore().getForestByPlayerName(this.playerName).points
    }
  },
  methods: {
    setCaveCount(caveCount) {
      useForestsStore().setCaveCount(this.playerName, caveCount)
    },
    toggleRankingsModal(closeOny) {
      const standingsModalElement = document.getElementById("standingsModal")
      if (standingsModalElement) {
        const open = standingsModalElement.classList.contains('show')
        if (open)
          Modal.getOrCreateInstance(standingsModalElement).hide()
        else if (!closeOny)
          Modal.getOrCreateInstance(standingsModalElement).show()
      }
    },
    startNewGame() {
      if (useGameStore().players.length > 1 && useForestsStore().forests.reduce((total, f) => total += f.points, 0) >= 50)
        event('gameFinished', {
          playerCount: useGameStore().players.length,
          maxPoints: useForestsStore().forests.reduce((max, f) => max = f.points > max ? f.points : max, 0)
        })
      useForestsStore().reset()
      useGameStore().selectPlayer(useGameStore().players[0].name)
      this.toggleRankingsModal(true)
      event('newGameStarted')
    },
    resetPlayers() {
      useGameStore().resetPlayers()
      useGameStore().addPlayer(`${this.$t('player')} 1`)
      useForestsStore().reinit()
      this.startNewGame()
      event('playerReset')
    },
  },
  watch: {
    playerName: {
      handler(newVal) {
        if (!newVal) {
          const gameStore = useGameStore()
          if (gameStore.players.length === 0) {
            const playerName = this.$t('player') + ' 1'
            gameStore.addPlayer(playerName)
            gameStore.selectPlayer(playerName)
            useForestsStore().addForest(playerName)
          } else {
            gameStore.selectPlayer(gameStore.players[0].name)
          }
        }
      },
      immediate: true
    }
  },
  mounted() {
    event('newGameStarted')
  }
}
</script>

<style scoped>
.distance-keeper {
  min-height: 10vh;
}

.narrow-input-wrapper {
  max-width: 4rem;
  width: 4rem;
}

.position-icon {
  min-width: 30px;
  width: 30px;
  max-width: 30px;
  min-height: 30px;
  height: 30px;
  max-height: 30px;
}
</style>