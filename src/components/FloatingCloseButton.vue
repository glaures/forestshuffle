<template>
  <div class="button-wrapper">
    <font-awesome-icon icon="window-close" size="2x" @click="$emit('close')"/>
  </div>
</template>
<style scoped>
.button-wrapper {
  position: fixed;
  display: flex;
  top: 2%;
  right: 2%;
  cursor: pointer;
}
</style>
<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>