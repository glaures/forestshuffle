<script setup>
import {RouterView} from 'vue-router'
import ErrorCapture from "@/components/ErrorCapture.vue";
import CookieConsent from "@/components/CookieConsent.vue";
import Footer from "@/components/Footer.vue";
import Version from "@/components/Version.vue";
</script>

<template>
  <header>
  </header>
  <ErrorCapture>
    <div class="mb-5">
      <RouterView/>
    </div>
  </ErrorCapture>
  <Footer v-if="$route.name === 'home'"/>
  <CookieConsent/>
  <Version/>
</template>

<script>
export default {
  data() {
    return {
      currentMode: import.meta.env.MODE
    }
  },
  mounted() {
    console.log('running in mode ' + this.currentMode)
    console.log('base url is ' + import.meta.env.VITE_BASE_URL)
  }
}
</script>


<style>
</style>
