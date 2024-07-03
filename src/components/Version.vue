<script>
import { version } from "@/../package.json"
export default {
  name: "Version",
  data() {
    return {
      version
    }
  }
}
</script>

<template>
  <div class="version text-secondary">{{version}}</div>
</template>

<style scoped>
.version {
  font-size: 8px;
  position: fixed;
  bottom: 1vh;
  min-width: 100vw;
  text-align: right;
  padding-right: 5vw;
}
</style>