<template>
  <div class="splash col-12 col-md-6 offset-md-3">
    <img src="/img/splash.png" class="w-100" alt="splash">
  </div>
  <div class="container text-center">
    <h1 class="mt-5 fs-1 fw-bold">{{ $t('forestShuffle') }}</h1>
    <h2 class="fs-5">{{ $t('scoringApp') }}</h2>
    <router-link :to="{name: 'defineForest'}">
      <button class="mt-3 btn btn-primary btn-sm">{{ $t('letsGo') }}</button>
    </router-link>
  </div>
</template>

<script>
import {useGameStore} from "@/stores/game-store.js";
import {useForestsStore} from "@/stores/forests-store.js";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {event} from "vue-gtag";

export default {
  name: "HomeView",
  components: {FontAwesomeIcon},
  data() {
    return {
      newPlayerName: ''
    }
  },
  computed: {
    players() {
      return useGameStore().players
    }
  },
  methods: {
    addPlayer() {
      useGameStore().addPlayer(this.newPlayerName)
      useForestsStore().addForest(this.newPlayerName)
      this.newPlayerName = ''
    }
  },
  mounted() {
    event('initialLanguage', {lang: this.$i18n.locale})
  }
}
</script>


<style scoped>
.splash {
  z-index: -1;
  position: fixed;
  bottom: 5vh;
}
</style>