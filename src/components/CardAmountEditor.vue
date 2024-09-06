<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useForestsStore} from "@/stores/forests-store.js";
import {event} from "vue-gtag"
import {useGameStore} from "@/stores/game-store.js";

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
    },
    distributedScoring() {
      return useGameStore().distributedScoring
    }
  },
  methods: {
    addCard() {
      useForestsStore().addCard(this.playerName, this.card.name)
      const cardNameEnglish = this.$t(this.card.name, 'en')
      event('cardAdded', {card: cardNameEnglish})
    },
    removeCard() {
      useForestsStore().removeCard(this.playerName, this.card.name)
    },
    paramAdd(param) {
      if (param.type === 'number')
        useForestsStore().addParam(this.playerName, this.card.name, param.name)
      else if (param.type === 'type')
        useForestsStore().addSymbolCount(this.playerName, param.symbol)
      else if (param.type === 'boolean')
        useForestsStore().toggleParam(this.playerName, this.card.name, param.name)
    },
    paramSub(param) {
      if (param.type === 'number')
        useForestsStore().subParam(this.playerName, this.card.name, param.name)
      else if (param.type === 'type')
        useForestsStore().subSymbolCount(this.playerName, param.symbol)
    }
  }
}
</script>

<template>
  <div class="row mt-2">
    <div class="fw-bold col-1">
      <span v-if="card.count > 0">{{ card.count }}&times;</span>
    </div>
    <div class="col-9 pe-0 text-nowrap overflow-x-hidden">
      <button @click="addCard" :class="'btn-' + card.symbols[0]" class="w-100 btn btn-primary btn-sm text-start">
        <img v-for="(symbol, idx) in card.symbols" :src="'./img/symbols/' + symbol + '.png'" height="20"
             :class="{'ms-1': idx > 0}"/>
        <img v-if="card.name.startsWith('roe')" :src="'./img/symbols/' + card.type + '.png'" height="20"
             class="ms-1"/>
        <span class="ms-2">{{ $t(card.name) }}</span>
      </button>
    </div>
    <div class="col-1 ps-0">
      <button class="ms-1 btn btn-outline-danger btn-sm" @click="removeCard">&times;</button>
    </div>
    <div class="col-1 text-start overflow-x-hidden">
      <span v-if="card.count > 0 && card.symbols.indexOf('butterfly') < 0 ">{{ card.points }}</span>
    </div>
  </div>
  <div v-for="(param, idx) in card.params" :key="param.name">
    <div v-if="!param.distributed || distributedScoring"
         class="mt-1 row"
         :class="{'mb-3': card.params.length === idx+1}">
      <div class="fw-bold offset-1 col-1 d-flex align-items-center">
        <span v-if="card.count > 0 && param.type === 'number'">{{ param.value }}</span>
        <span v-if="card.count > 0 && param.type === 'type'">{{ forest[param.symbol + 'Count'] }}</span>
        <span v-if="card.count > 0 && param.type === 'boolean'">
          <span v-if='param.value' class="text-success"><font-awesome-icon icon="check" size="lg"/></span>
         <span v-else class="text-danger"><font-awesome-icon icon="xmark" size="lg"/></span>
        </span>
      </div>
      <div class="col-8 text-nowrap pe-0">
        <button @click="paramAdd(param)" :class="'btn-' + card.symbols[0]"
                class="btn btn-sm btn-primary text-start w-100">
          <img v-if="param.type === 'type'" :src="'./img/symbols/' + param.symbol + '.png'" :alt="$t(param.symbol)"
               height="20"/>
          <span class="ps-2">{{ $t(param.name) }}</span>
        </button>
      </div>
      <div class="col-1 ps-0">
        <button v-if="param.type !== 'boolean'" class="ms-1 btn btn-outline-danger btn-sm" @click="paramSub(param)">
          &times;
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-amphibian {
  background-color: #9d8683;
}

.btn-bat {
  background-color: #171513;
}

.btn-bird {
  background-color: #5188b6;
}

.btn-butterfly {
  background-color: #6a1674;
}

.btn-deer {
  background-color: #bf9e32;
}

.btn-insect {
  background-color: #4e756f;
}

.btn-mushroom {
  background-color: #632e26;
}

.btn-pawedAnimal {
  background-color: #672e25;
}

.btn-plant {
  background-color: #637d3d;
}

.btn-tree {
  background-color: #b5c01e;
}

.btn-clovenHoofedAnimal {
  background-color: #6a4332;
}

.btn-shrub {
  background-color: #6e884e;
}
</style>