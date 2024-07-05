<template>
  <PlayerNavigation/>
  <Navigation/>
  <div v-if="forest" class="container">
    <div class="distance-keeper position-relative"></div>
    <CardAmountEditorList :cards="trees"
                          :forest="forest"
                          symbol="tree"
                          heading="trees">
    </CardAmountEditorList>

    <div class="mt-4 fs-2 border-primary border-bottom">{{ $t('tops') }}</div>
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

    <div class="mt-4 fs-2 border-primary border-bottom">{{ $t('bottoms') }}</div>
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

    <div class="mt-4 fs-2 border-primary border-bottom">{{ $t("sides") }}</div>
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
                          :cards="deerAndCloven"
                          :forest="forest"
                          symbol="deer"
                          symbol2="clovenHoofedAnimal"
                          heading="deerAndCloven"/>
    <CardAmountEditorList class="mt-4"
                          :cards="pawedSide"
                          :forest="forest"
                          symbol="pawedAnimal"
                          heading="pawedAnimals"/>
    <div class="mt-4 mb-5">
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
  </div>
</template>

<script>
import CardAmountEditor from "@/components/CardAmountEditor.vue";
import {useForestsStore} from "@/stores/forests-store.js";
import CardAmountEditorList from "@/components/CardAmountEditorList.vue";
import {useGameStore} from "@/stores/game-store.js";
import PlayerNavigation from "@/components/PlayerNavigation.vue";
import Navigation from "@/components/Navigation.vue";

export default {
  components: {Navigation, PlayerNavigation, CardAmountEditorList, CardAmountEditor},
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
      return this.cards.filter(c => c.symbols.indexOf('tree') >= 0)
    },
    birds() {
      return this.cards.filter(c => c.symbols.indexOf('bird') >= 0)
    },
    butterflies() {
      return this.cards.filter(c => c.symbols.indexOf('butterfly') >= 0)
    },
    others() {
      return this.forest.cards.filter(c => c.name === 'redSquirrel')
    },
    plants() {
      return this.cards.filter(c => c.symbols.indexOf('plant') >= 0)
    },
    mushrooms() {
      return this.cards.filter(c => c.symbols.indexOf('mushroom') >= 0)
    },
    amphibians() {
      return this.cards.filter(c => c.symbols.indexOf('amphibian') >= 0)
    },
    insectsBottom() {
      return this.cards.filter(c => c.symbols.indexOf('insect') >= 0 && c.position === 'bottom')
    },
    pawedBottom() {
      return this.cards.filter(c => c.symbols.indexOf('pawedAnimal') >= 0 && c.position === 'bottom')
    },
    insectsSide() {
      return this.cards.filter(c => c.symbols.indexOf('insect') >= 0 && c.position === 'side')
    },
    bats() {
      return this.cards.filter(c => c.symbols.indexOf('bat') >= 0)
    },
    deerAndCloven() {
      return this.cards.filter(c => (c.symbols.indexOf('deer') >= 0 || c.symbols.indexOf('clovenHoofedAnimal') >= 0))
    },
    roeDeerPresent() {
      return this.forest.roeDeerPresent()
    },
    pawedSide() {
      return this.cards.filter(c => c.symbols.indexOf('pawedAnimal') >= 0 && c.position === 'side')
    },
    points() {
      return useForestsStore().getForestByPlayerName(this.playerName).points
    }
  },
  methods: {
    setCaveCount(caveCount) {
      useForestsStore().setCaveCount(this.playerName, caveCount)
    }
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
  }
}
</script>

<style scoped>
.distance-keeper {
  min-height: 13vh;
}

.narrow-input-wrapper {
  max-width: 4rem;
  width: 4rem;
}
</style>