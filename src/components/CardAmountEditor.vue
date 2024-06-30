<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "CardAmountEditor",
  components: {FontAwesomeIcon},
  emits: ['add', 'remove', 'paramAdd'],
  props: {
    cardName: String,
    count: Number,
    points: Number,
    params: Object
  },
}
</script>

<template>
  <div class="row mt-1">
    <div class="col-2 text-nowrap">
      <div @click="$emit('add')" class="btn btn-outline-primary btn-sm cursor-pointer">
        <font-awesome-icon icon="circle-plus"/>
      </div>
      <div @click="$emit('remove')" class="ms-1 btn btn-outline-danger btn-sm cursor-pointer">
        <font-awesome-icon icon="circle-minus"/>
      </div>
    </div>
    <div class="col-1 fw-bold">
      {{ count }}&times;
    </div>
    <div class="col-7">
      {{ $t(cardName, 'en') }}
    </div>
    <div class="col-2">
      {{ points }}
    </div>
  </div>
  <div class="row mt-1" v-for="param in params" :key="param.name">
    <div v-if="param.type === 'number'" class="col-2 offset-1 text-nowrap">
      <div @click="$emit('paramAdd', param.name)"
           class="btn btn-outline-primary btn-sm cursor-pointer">
        <font-awesome-icon icon="circle-plus"/>
      </div>
      <div @click="$emit('remove')" class="ms-1 btn btn-outline-danger btn-sm cursor-pointer">
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