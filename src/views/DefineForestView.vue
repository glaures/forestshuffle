<template>
  <div class="container">
    <div class="h1">{{ playerName }}</div>
    <div>Points: {{ points }}</div>
    <div class="mt-5 list-group">
      <div class="list-group-item">
        <CardAmountEditor v-for="card in cards"
                          :key="card.name"
                          :card-name="card.name"
                          :params="card.params ? card.params : null"
                          :count="forest.findCard(card.name).count"
                          :points="card.points"
                          @add="addCard(card.name)"
                          @remove="removeCard(card.name)"
                          @param-add="paramAdd(card.name, $event)">
        </CardAmountEditor>
      </div>
    </div>
  </div>
</template>

<script>
import CardAmountEditor from "@/components/CardAmountEditor.vue";
import {useForestsStore} from "@/stores/forests-store.js";

export default {
  components: {CardAmountEditor},
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
    points() {
      return useForestsStore().getForestByPlayerName(this.playerName).points
    }
  },
  methods: {
    addCard(cardName) {
      useForestsStore().addCard(this.playerName, cardName)
    },
    removeCard(cardName) {
      useForestsStore().removeCard(this.playerName, cardName)
    },
    paramAdd(cardName, paramName) {
      useForestsStore().addParam(this.playerName, cardName, paramName)
    }
  }
}
</script>

<style scoped>

</style>