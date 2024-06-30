<template>
  <div class="container">
    <div v-for="player in players"
         :key="'player_' + player.name">
      {{ player.name }}
      <router-link :to="{name: 'defineForest', params: { playerName: player.name}}">
        Define Forest
      </router-link>
    </div>
    <div class="h1">Weitere Spieler erstellen</div>
    <div>
      <label for="#newPlayerNameInput">Name des neuen Spielers</label>
      <input id="newPlayerNameInput" class="form-control" v-model="newPlayerName"/>
      <button @click="addPlayer">Add player</button>
    </div>
  </div>
</template>

<script>
import {useGameStore} from "@/stores/game-store.js";
import {useForestsStore} from "@/stores/forests-store.js";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "HomeView",
  components: {FontAwesomeIcon},
  data() {
    return {
      newPlayerName: ''
    }
  },
  computed: {
    players(){
      return useGameStore().players
    }
  },
  methods: {
    addPlayer(){
      useGameStore().addPlayer(this.newPlayerName)
      useForestsStore().addForest(this.newPlayerName)
      this.newPlayerName = ''
    }
  }
}
</script>


<style scoped>

</style>