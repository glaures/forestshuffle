<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useGameStore} from "@/stores/game-store.js";

export default {
  name: "FloatingButtons",
  components: {FontAwesomeIcon},
  emits: ['addPlayer', 'toggleStandings'],
  computed:{
    playerCount(){
      return useGameStore().players.length
    }
  }
}
</script>

<template>
  <div class="wrapper">
    <div class="d-flex justify-content-around align-items-center">
      <div class="button-group">
        <font-awesome-icon class="btn btn-primary rounded-5 py-2 shadow"
                           :class="{disabled: playerCount >= 5}"
                           icon="user-plus" size="1x"
                           @click="$emit('addPlayer')"/>
        <font-awesome-icon class="ms-1 btn btn-primary rounded-5 py-2 shadow" icon="list-ol" size="1x" @click="$emit('toggleStandings')"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  position: fixed;
  bottom: 1vh;
  right: 1vw;
  display: flex;
}

</style>