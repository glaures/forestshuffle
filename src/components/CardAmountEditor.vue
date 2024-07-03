<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useForestsStore} from "@/stores/forests-store.js";
import SymbolAmountEditor from "@/components/SymbolAmountEditor.vue";

export default {
  name: "CardAmountEditor",
  components: {SymbolAmountEditor, FontAwesomeIcon},
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
  <div class="d-flex mt-2">
    <div class="fw-bold card-amount">
      <span v-if="card.count > 0">{{ card.count }}&times;</span>
    </div>
    <div class="flex-grow-1">
      <button @click="addCard" :class="'btn-' + card.symbols[0]" class="btn btn-primary btn-sm btn-card">
        <img :src="'./img/symbols/' + card.symbols[0] + '.png'" height="20"/>
        <span class="ms-2">{{ $t(card.name) }}</span>
      </button>
      <button class="ms-1 btn btn-outline-danger btn-sm" @click="removeCard">&times;</button>
    </div>
    <div>
      <span v-if="card.count > 0 && card.symbols.indexOf('butterfly') < 0 ">{{ card.points }}</span>
    </div>
  </div>
  <div class="mt-1 mb-2" v-for="param in card.params" :key="param.name">
    <div v-if="param.type === 'number'" class="mt-1 mb-3 d-flex align-items-center">
      <div class="card-amount"/>
      <div class="fw-bold card-amount">
        <span v-if="card.count > 0">{{ param.value }}</span>
      </div>
      <div class="flex-grow-1">
        <button @click="paramAdd(param.name)" :class="'btn-' + card.symbols[0]"
                class="btn btn-sm btn-primary btn-card">
          <span class="ms-2">{{ $t(param.name) }}</span>
        </button>
        <button class="ms-1 btn btn-outline-danger btn-sm" @click="paramSub(param.name)">&times;</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-amount {
  width: 8vw;
  min-width: 8vw;
  max-width: 8vw;
}

.btn-card {
  min-width: 60vw;
  width: 60vw;
  text-align: left;
}

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
</style>