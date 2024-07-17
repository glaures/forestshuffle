<template>
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
import {RouterView, useRoute} from 'vue-router'
import ErrorCapture from "@/components/ErrorCapture.vue";
import CookieConsent from "@/components/CookieConsent.vue";
import Footer from "@/components/Footer.vue";
import Version from "@/components/Version.vue";
import {useGameStore} from "@/stores/game-store.js";

export default {
  head() {
    return {
      title: this.$t('meta.title'),
      meta: [
        {
          name: 'description',
          content: this.$t('meta.description'),
        },
        {
          name: 'keywords',
          content: this.$t('meta.keywords'),
        },
      ]
    }
  },
  components: {
    RouterView, ErrorCapture, CookieConsent, Footer, Version
  },
  data() {
    return {
      currentMode: import.meta.env.MODE,
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
