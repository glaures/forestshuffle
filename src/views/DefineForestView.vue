<template>
  <div class="container">
    <div class="position-fixed z-1 bg-white w-100 pb-3">
      <div class="h1">{{ playerName }}</div>
      <div>Points: {{ points }}</div>
    </div>
    <div class="distance-keeper position-relative"></div>
    <div class="h1">{{ $t("trees") }}</div>
    <CardAmountEditorList :cards="trees"
                          :forest="forest">
    </CardAmountEditorList>
    <div class="h1">{{ $t("tops") }}</div>
    <div class="h4">{{ $t("birds") }}</div>
    <CardAmountEditorList :cards="birds"
                          :forest="forest">
    </CardAmountEditorList>
    <div class="h4 d-flex justify-content-between">
      <div>{{ $t("butterflies") }}</div>
      <div>{{$t('points')}}: {{butterflyPoints}}</div>
    </div>
    <CardAmountEditorList :cards="butterflies"
                          :forest="forest">
    </CardAmountEditorList>
    <div class="h4">{{ $t("others") }}</div>
    <CardAmountEditorList :cards="others"
                          :forest="forest">
    </CardAmountEditorList>
    <div class="h1">{{ $t("bottoms") }}</div>
    <div class="h4">{{ $t("plants") }}</div>
    <CardAmountEditorList :cards="plants"
                          :forest="forest">
    </CardAmountEditorList>
    <div class="h4">{{ $t("mushrooms") }}</div>
    <CardAmountEditorList :cards="mushrooms"
                          :forest="forest">
    </CardAmountEditorList>
    <div class="h4">{{ $t("amphibians") }}</div>
    <CardAmountEditorList :cards="amphibians"
                          :forest="forest">
    </CardAmountEditorList>
    <div class="h4">{{ $t("insects") }}</div>
    <CardAmountEditorList :cards="insectsBottom"
                          :forest="forest">
    </CardAmountEditorList>
    <div class="h4">{{ $t("pawedAnimals") }}</div>
    <CardAmountEditorList :cards="pawedBottom"
                          :forest="forest">
    </CardAmountEditorList>
    <div class="h1">{{ $t("sides") }}</div>
    <div class="h4">{{ $t("insects") }}</div>
    <CardAmountEditorList :cards="insectsSide"
                          :forest="forest">
    </CardAmountEditorList>
    <div class="h4">{{ $t("bats") }}</div>
    <CardAmountEditorList :cards="bats"
                          :forest="forest">
    </CardAmountEditorList>
    <div class="h4">{{ $t("deer") }}</div>
    <CardAmountEditorList :cards="deer"
                          :forest="forest">
    </CardAmountEditorList>
    <SymbolAmountEditor class="mt-3" :player-name="playerName" v-if="roeDeerPresent"/>
  </div>
</template>

<script>
import CardAmountEditor from "@/components/CardAmountEditor.vue";
import {useForestsStore} from "@/stores/forests-store.js";
import CardAmountEditorList from "@/components/CardAmountEditorList.vue";
import SymbolAmountEditor from "@/components/SymbolAmountEditor.vue";

export default {
  components: {SymbolAmountEditor, CardAmountEditorList, CardAmountEditor},
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
    plants(){
      return this.cards.filter(c => c.symbols.indexOf('plant') >= 0)
    },
    mushrooms(){
      return this.cards.filter(c => c.symbols.indexOf('mushroom') >= 0)
    },
    amphibians(){
      return this.cards.filter(c => c.symbols.indexOf('amphibian') >= 0)
    },
    insectsBottom(){
      return this.cards.filter(c => c.symbols.indexOf('insect') >= 0 && c.position === 'bottom')
    },
    pawedBottom(){
      return this.cards.filter(c => c.symbols.indexOf('pawedAnimal') >= 0 && c.position === 'bottom')
    },
    insectsSide(){
      return this.cards.filter(c => c.symbols.indexOf('insect') >= 0 && c.position === 'side')
    },
    bats(){
      return this.cards.filter(c => c.symbols.indexOf('bat') >= 0)
    },
    deer(){
      return this.cards.filter(c => c.symbols.indexOf('deer') >= 0)
    },
    roeDeerPresent(){
      return this.forest.roeDeerPresent()
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