<template>
  <slot></slot>
</template>

<script>
import {showError} from "@/utils/notifications.js";

export default {
  errorCaptured(error, vm, info) {
    // showError(info)
    console.error(error)
    showError(error.message)
    return false;
  },
};
</script>

<style scoped>

</style>