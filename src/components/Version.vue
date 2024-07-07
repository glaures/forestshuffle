<script>
import { version } from "@/../package.json"
import {event} from "vue-gtag";

export default {
  name: "Version",
  data() {
    return {
      version
    }
  },
  mounted(){
    event('version', {version: this.version})
  }
}
</script>

<template>
  <div v-if="$route.name === 'home'" class="version text-info">{{version}}</div>
</template>

<style scoped>
.version {
  font-size: 8px;
  position: fixed;
  bottom: 0.2vh;
  right: 0;
  text-align: right;
  padding-right: 0.2vw;
}
</style>