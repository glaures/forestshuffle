<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useForestsStore} from "@/stores/forests-store.js";

export default {
  name: "CardAmountEditor",
  components: {FontAwesomeIcon},
  props: {
    card: Object,
    forest: Object,
  },
  computed: {
    playerName() {
      return this.forest.playerName
    }
  },
  methods: {
    addCard() {
      useForestsStore().addCard(this.playerName, this.card.name)
    },
    removeCard() {
      useForestsStore().removeCard(this.playerName, this.card.name)
    },
    paramAdd(paramName) {
      useForestsStore().addParam(this.playerName, this.card.name, paramName)
    },
    paramSub(paramName) {
      useForestsStore().subParam(this.playerName, this.card.name, paramName)
    }
  }
}
</script>

<template>
  <div class="row mt-1">
    <div class="col-2 text-nowrap">
      <div @click="addCard" class="btn btn-outline-primary btn-sm cursor-pointer">
        <font-awesome-icon icon="circle-plus"/>
      </div>
      <div @click="removeCard" class="ms-1 btn btn-outline-danger btn-sm cursor-pointer">
        <font-awesome-icon icon="circle-minus"/>
      </div>
    </div>
    <div class="col-1 fw-bold">
      <span v-if="card.count > 0">{{ card.count }}&times;</span>
    </div>
    <div class="col-7">
      {{ $t(card.name, 'en') }}
    </div>
    <div class="col-2">
      <span v-if="card.count > 0 && card.symbols.indexOf('butterfly') < 0 ">{{ card.points }}</span>
    </div>
  </div>
  <div class="row mt-1" v-for="param in card.params" :key="param.name">
    <div v-if="param.type === 'number'" class="col-2 offset-1 text-nowrap">
      <div @click="paramAdd(param.name)"
           class="btn btn-outline-primary btn-sm cursor-pointer">
        <font-awesome-icon icon="circle-plus"/>
      </div>
      <div @click="paramSub(param.name)" class="ms-1 btn btn-outline-danger btn-sm cursor-pointer">
        <font-awesome-icon icon="circle-minus"/>
      </div>
    </div>
    <div class="col-1">
      {{ param.value }}
    </div>
    <div class="col-8">{{ $t(param.name) }}</div>
  </div>
</template>

<style scoped>

</style>