import {defineStore} from "pinia";
import { reactive } from 'vue';
import {Forest} from "@/model/Forest.js";

export const useForestsStore = defineStore('forests', {
    state: () => ({
        forests: []
    }),
    getters: {
        getForestByPlayerName: (state) => (playerName) => {
            return state.forests.find(forest => forest.playerName === playerName)
        }
    },
    actions: {
        addForest(playerName){
            const f = reactive(new Forest(playerName, this.forests))
            this.forests.push(f)
            this.updatePointsInAllForests()
            return f
        },
        addCard(playerName, cardName) {
            this.getForestByPlayerName(playerName).addCard(cardName)
            this.updatePointsInAllForests()
        },
        removeCard(playerName, cardName) {
            this.getForestByPlayerName(playerName).removeCard(cardName)
            this.updatePointsInAllForests()
        },
        addParam(playerName, cardName){
            this.getForestByPlayerName(playerName).addParam(cardName)
            this.updatePointsInAllForests()
        },
        subParam(playerName, cardName){
            this.getForestByPlayerName(playerName).subParam(cardName)
            this.updatePointsInAllForests()
        },
        updatePointsInAllForests(){
            for(let forest of this.forests)
                forest.updatePoints()
        }
    }
})