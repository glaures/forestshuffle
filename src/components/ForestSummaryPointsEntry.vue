<script>
import {useGameStore} from "@/stores/game-store.js";

export default {
  name: "ForestSummaryPointsEntry",
  props: {
    count: Number,
    points: Number,
    isFas: Boolean,
    bgColor: String,
    icon: String,
    border: Boolean
  },
  computed: {
    iconUrl() {
      return import.meta.env.VITE_BASE_URL + 'img/symbols/tree.png'
    },
    shrubIconUrl() {
      return import.meta.env.VITE_BASE_URL + 'img/symbols/shrub.png'
    },
    bgColorClass() {
      return 'bg-' + this.bgColor
    },
    woodlandExpansion() {
      return useGameStore().woodlandEdgeExpansion
    }
  }
}
</script>

<template>
  <div class="d-block"
       :class="{'pe-3 border-end border-light': border}">
    <div class="d-flex align-items-center">
      <div v-if="!isFas">
        <img :src="iconUrl" :alt="$t(icon)" height="24"/>
        <img v-if="icon === 'tree' && woodlandExpansion" :src="shrubIconUrl" :alt="$t(icon)" height="24"/>
      </div>
      <div v-else
           class="ms-2"
           :class="bgColorClass + ' border border-2 text-ligh t border-light rounded justify-content-center align-items-center d-flex me-2'"
           style="min-width: 24px; min-height: 24px;">
        <font-awesome-icon :icon="icon"/>
      </div>
      {{ count }}
    </div>
    <div class="d-flex justify-content-center mt-2">
      <img src="/img/points.png" height="22">&nbsp;{{ points }}
    </div>
  </div>
</template>

<style scoped>

</style>