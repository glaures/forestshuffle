<script>
import {Forest} from "@/model/Forest.js";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import ForestSummaryPointsEntry from "@/components/ForestSummaryPointsEntry.vue";
import {useForestsStore} from "@/stores/forests-store.js";

export default {
  name: "ForestSummary",
  components: {ForestSummaryPointsEntry, FontAwesomeIcon},
  props: {
    forest: Forest
  },
  computed: {
  }
}
</script>

<template>
  <div class="card">
    <div class="card-header fs-5">{{ $t('summary') }}</div>
    <div class="card-body">
      <div class="d-flex justify-content-around align-items-center">
        <ForestSummaryPointsEntry icon="tree" :is-fas="false" :points="forest.treePoints()" :count="forest.treeCardsCount()"
                                  :border="true"/>

        <ForestSummaryPointsEntry bg-color="secondary" icon="arrow-up" :is-fas="true" :points="forest.topPoints()"
                                  :count="forest.topCount()"
                                  :border="true"/>

        <ForestSummaryPointsEntry bg-color="warning" icon="arrow-down" :is-fas="true" :points="forest.bottomPoints()"
                                  :count="forest.bottomCount()"
                                  :border="true"/>

        <ForestSummaryPointsEntry bg-color="info" icon="arrows-left-right" :is-fas="true" :points="forest.sidePoints()"
                                  :count="forest.sideCount()"
                                  :border="false"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>