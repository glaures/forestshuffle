<template>
  <div class="container">
    <div class="position-fixed z-1 bg-white w-100 pb-3">
      <div class="h1">{{ playerName }}</div>
      <div>Points: {{ points }}</div>
    </div>
    <div class="distance-keeper position-relative"></div>
    <div class="h4 mt-2">{{ $t("trees") }}</div>
    <CardAmountEditorList :cards="trees"
                          :forest="forest">
    </CardAmountEditorList>
    <div class="h4 mt-3">{{ $t("birds") }}</div>
    <CardAmountEditorList :cards="birds"
                          :forest="forest">
    </CardAmountEditorList>
    <div class="h4 mt-3 d-flex justify-content-between">
      <div>{{ $t("butterflies") }}</div>
      <div>{{$t('points')}}: {{butterflyPoints}}</div>
    </div>
    <CardAmountEditorList :cards="butterflies"
                          :forest="forest">
    </CardAmountEditorList>
    <div class="h4 mt-3">{{ $t("others") }}</div>
    <CardAmountEditorList :cards="others"
                          :forest="forest">
    </CardAmountEditorList>
  </div>
</template>

<script>
import CardAmountEditor from "@/components/CardAmountEditor.vue";
import {useForestsStore} from "@/stores/forests-store.js";
import CardAmountEditorList from "@/components/CardAmountEditorList.vue";

export default {
  components: {CardAmountEditorList, CardAmountEditor},
  props: {
    playerName: String
  },
  computed: {
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
    butterflyPoints() {
      return this.forest.butterflyPoints
    },
    others(){
      return this.forest.cards.filter(c => c.name === 'redSquirrel')
    },
    points() {
      return useForestsStore().getForestByPlayerName(this.playerName).points
    }
  }
}
</script>

<style scoped>
.distance-keeper {
  min-height: 13vh;
}
</style>