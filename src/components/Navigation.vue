<template>
  <div class="position-fixed bottom-0 d-flex justify-content-center w-100 z-9999 bottom-nav">
    <font-awesome-icon class="text-info aligned-bottom" icon="caret-up" size="5x" role="button"
                       data-bs-toggle="offcanvas" data-bs-target="#navigation" aria-controls="offcanvasExample"/>
  </div>
  <div id="navigation" class="offcanvas offcanvas-bottom z-9999" tabindex="-1">
    <div class="offcanvas-header">
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="d-flex justify-content-center">
        <div class="btn btn-primary" @click="startNewGame">{{ $t('startNewGame') }}</div>
        <div class="ms-2 btn btn-warning" @click="resetPlayers">{{ $t('resetPlayers') }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useGameStore} from "@/stores/game-store.js";
import {useForestsStore} from "@/stores/forests-store.js";

export default {
  name: "Navigation",
  components: {FontAwesomeIcon},
  methods: {
    startNewGame() {
      useForestsStore().reset()
    },
    resetPlayers() {
      useGameStore().resetPlayers()
      this.startNewGame()
    }
  }
}
</script>

<style scoped>
.aligned-bottom {
  position: absolute;
  bottom: -35px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}
</style>