<script>
import {useForestsStore} from "@/stores/forests-store.js";

export default {
  name: "SymbolAmountEditor",
  props: {
    playerName: String
  },
  computed: {
    forest() {
      return useForestsStore().getForestByPlayerName(this.playerName)
    }
  },
  methods: {
    update(symbol, value){
      useForestsStore().setSymbolCount(this.playerName, symbol, value)
    },
    add(symbol){
      useForestsStore().addSymbolCount(this.playerName, symbol)
    }
  }
}
</script>
<template>
  <div class="d-flex justify-content-around">
    <div v-for="(symbol, idx) in ['beech', 'linden', 'silverFir', 'horseChestnut', 'birch']" class="text-center">
      <label :for="'#' + symbol + 'CountInput'" @click="add(symbol)">
        <img :src="'./img/symbols/' + symbol + '.png'" :alt="symbol" width="32" class="img-fluid"/>
      </label>
      <input :id="symbol + 'CountInput'"
             :value="forest[symbol + 'Count']"
             @input="update(symbol, $event.target.value)"
             type="number"
             class="form-control amount-input"
             min="0"
             onfocus="this.select();"
             onclick="this.select();"/>
    </div>
  </div>
</template>

<style scoped>
.amount-input {
  text-align: center;
  user-select: all;
  max-width: 3rem;
}
</style>