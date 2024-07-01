<script>
import CardAmountEditor from "@/components/CardAmountEditor.vue";
import {Forest} from "@/model/Forest.js";

export default {
  name: "CardAmountEditorList",
  components: {CardAmountEditor},
  props: {
    cards: Array,
    forest: Forest
  }
}
</script>

<template>
  <ul class="list-group">
    <li v-for="card in cards"
        :key="'cae_' + card.name"
        class="list-group-item">
      <CardAmountEditor
                        :card="card"
                        :forest="forest">
      </CardAmountEditor>
    </li>
  </ul>
</template>

<style scoped>

</style>