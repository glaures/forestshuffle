<template>
  <div class="d-flex justify-content-center align-items-center burger-menu z-9999 bg-primary rounded-3 opacity-75"
       data-bs-toggle="offcanvas" data-bs-target="#navigation"
       aria-controls="offcanvasExample">
    <font-awesome-icon class="text-light" icon="bars"
                       role="button"/>
  </div>

  <div id="navigation" class="offcanvas offcanvas-end z-9999" tabindex="-1">
    <div class="offcanvas-header">
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="d-block btn btn-primary cursor-pointer" @click="startNewGame">{{ $t('startNewGame') }}</div>
      <div class="mt-2 d-block btn btn-warning" @click="resetPlayers">{{ $t('resetPlayers') }}</div>
      <div class="d-flex mt-3 w-100 justify-content-center" @click="toggleAlpineExpansion">
        <input class="form-check form-check-input bg-primary" type="checkbox" :checked="alpineExpansion"
               @input="toggleAlpineExpansion"/>
        <div class="form-check-label ms-2 user-select-none">
          <img src="/img/symbols/alps.png" alt="alps" height="24"/>{{ $t('alpineExpansion') }}
        </div>
      </div>
      <div class="d-flex justify-content-center w-100 mt-5">
        <span class="flag-icon flag-icon-gb-eng cursor-pointer" @click="changeLanguage('en')"/>
        <span class="ms-2 flag-icon flag-icon-de cursor-pointer" @click="changeLanguage('de')"/>
        <span class="ms-2 flag-icon flag-icon-fr cursor-pointer" @click="changeLanguage('fr')"/>
        <span class="ms-2 flag-icon flag-icon-it cursor-pointer" @click="changeLanguage('it')"/>
      </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useGameStore} from "@/stores/game-store.js";
import {useForestsStore} from "@/stores/forests-store.js";
import {event} from "vue-gtag";
import {Offcanvas} from 'bootstrap'

export default {
  name: "Navigation",
  components: {FontAwesomeIcon},
  computed: {
    alpineExpansion() {
      return useGameStore().alpineExpansion
    }
  },
  methods: {
    closeMenu() {
      Offcanvas.getInstance(document.getElementById('navigation')).hide()
    },
    startNewGame() {
      useForestsStore().reset()
      this.closeMenu()
      event('newGameStarted')
    },
    resetPlayers() {
      useGameStore().resetPlayers()
      this.startNewGame()
      this.closeMenu()
      event('playerReset')
    },
    toggleAlpineExpansion() {
      useGameStore().toggleAlpineExpansion()
      event('alpineExpansionToggled', {newState: this.alpineExpansion})
    },
    changeLanguage(newLang) {
      this.$i18n.locale = newLang
      event('languageChanged', {language: newLang})
    }
  }
}
</script>

<style scoped>
#navigation {
  height: 40vh;
  max-height: 40vh;
  top: 30vh;
}

.burger-menu {
  position: fixed;
  right: -10px;
  top: 50vh;
  min-width: 40px;
  min-height: 40px;
}

</style>