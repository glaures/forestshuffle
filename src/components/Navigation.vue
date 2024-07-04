<template>
  <font-awesome-icon class="position-fixed right-aligned text-info z-9999 " icon="caret-left" size="5x" role="button"
                     data-bs-toggle="offcanvas" data-bs-target="#navigation" aria-controls="offcanvasExample"/>

  <div id="navigation" class="offcanvas offcanvas-end z-9999" tabindex="-1">
    <div class="offcanvas-header">
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="d-block btn btn-primary" @click="startNewGame">{{ $t('startNewGame') }}</div>
      <div class="mt-2 d-block btn btn-warning" @click="resetPlayers">{{ $t('resetPlayers') }}</div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useGameStore} from "@/stores/game-store.js";
import {useForestsStore} from "@/stores/forests-store.js";
import { Offcanvas } from 'bootstrap'

export default {
  name: "Navigation",
  components: {FontAwesomeIcon},
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

.right-aligned {
  position: fixed;
  right: -15px;
  top: 50vh;
}

.aligned-bottom {
  position: absolute;
  bottom: -35px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}
</style>