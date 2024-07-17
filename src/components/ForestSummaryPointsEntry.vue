<script>
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
    bgColorClass() {
      return 'bg-' + this.bgColor
    }
  }
}
</script>

<template>
  <div class="d-block"
  :class="{'pe-3 border-end border-light': border}">
    <div class="d-flex align-items-center">
      <img v-if="!isFas" :src="iconUrl" :alt="$t(icon)" height="24" class="me-2"/>
      <div v-else
           :class="bgColorClass + ' border border-2 text-light border-light rounded justify-content-center align-items-center d-flex me-2'"
           style="min-width: 24px; min-height: 24px;">
        <font-awesome-icon :icon="icon"/>
      </div>
      {{ count }}
    </div>
    <div class="d-flex justify-content-center mt-2">
      <img src="/img/points.png" height="22">&nbsp;{{points}}
    </div>
  </div>
</template>

<style scoped>

</style>