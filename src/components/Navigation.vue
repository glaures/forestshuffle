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
      <div class="d-block btn btn-primary" @click="startNewGame">{{ $t('startNewGame') }}</div>
      <div class="mt-2 d-block btn btn-warning" @click="resetPlayers">{{ $t('resetPlayers') }}</div>
      <div class="d-flex mt-3 w-100 justify-content-center">
        <input class="form-check form-check-input alpine-checkbox" type="checkbox" :checked="alpineExpansion"
               @input="toggleAlpineExpansion"/>
        <div class="form-check-label ms-2">
          <img src="/img/symbols/alps.png" alt="alps" height="24"/>{{ $t('alpineExpansion') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useGameStore} from "@/stores/game-store.js";
import {useForestsStore} from "@/stores/forests-store.js";
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
    },
    resetPlayers() {
      useGameStore().resetPlayers()
      this.startNewGame()
      this.closeMenu()
    },
    toggleAlpineExpansion() {
      useGameStore().toggleAlpineExpansion()
    }
  }
}
</script>

<style scoped>
#navigation {
  height: 30vh;
  max-height: 30vh;
  top: 40vh;
}

.burger-menu {
  position: fixed;
  right: -10px;
  top: 50vh;
  min-width: 40px;
  min-height: 40px;
}

.alpine-checkbox {
  background-color: #8476b2;
}
</style>