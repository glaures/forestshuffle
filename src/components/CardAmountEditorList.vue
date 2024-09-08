<script>
import CardAmountEditor from "@/components/CardAmountEditor.vue";
import {Forest} from "@/model/Forest.js";
import {useGameStore} from "@/stores/game-store.js";

export default {
  name: "CardAmountEditorList",
  components: {CardAmountEditor},
  props: {
    cards: Array,
    forest: Forest,
    symbol: String,
    symbol2: String,
    heading: String
  },
  computed: {
    totalPoints() {
      if (this.symbol === 'butterfly')
        return this.forest.butterflyPoints
      return this.cards.map(c => c.points)
          .reduce((p, sum) => sum += p, 0)
    },
    filteredCards() {
      let res = this.cards
      if (!useGameStore().alpineExpansion)
        res = res.filter(c => c.symbols.indexOf('alps') < 0)
      if (!useGameStore().woodlandEdgeExpansion)
        res = res.filter(c => c.symbols.indexOf('woodlandEdge') < 0)
      return res
    }
  }
}
</script>

<template>
  <div v-if="filteredCards.length > 0">
    <div v-bind="$attrs" class="d-flex align-items-center">
      <img :src="'./img/symbols/' + symbol + '.png'" height="24" :alt="$t(heading)"/>
      <img v-if="symbol2" :src="'./img/symbols/' + symbol2 + '.png'" height="24" :alt="$t(heading)"/>
      <div class="ms-1 fs-5 flex-grow-1">{{ $t(heading) }}</div>
      <div class="fs-5 fw-bold"><img src="/img/points.png" alt="points" height="28"/>&nbsp;{{ totalPoints }}</div>
    </div>
    <div v-for="card in filteredCards"
         :key="'cae_' + card.name"
         class="d-block">
      <CardAmountEditor
          :card="card"
          :forest="forest">
      </CardAmountEditor>
    </div>
  </div>
</template>

<style scoped>

</style>