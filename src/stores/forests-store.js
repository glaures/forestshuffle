import {defineStore} from "pinia";
import {reactive} from 'vue';
import {Forest} from "@/model/Forest.js";
import {useGameStore} from "@/stores/game-store.js";

export const useForestsStore = defineStore('forests', {
    state: () => ({
        forests: []
    }),
    getters: {
        getForestByPlayerName: (state) => (playerName) => {
            return state.forests.find(forest => forest.playerName === playerName)
        },
        totalPoints: (state) => () => {
            return state.forests.reduce((total, f) => total += f.points, 0)
        }
    },
    actions: {
        toggleDistributedScoring() {
            useGameStore().toggleDistributedScoring()
            this.forests.forEach(f => f.distributedScoring = useGameStore().distributedScoring)
            this.updatePointsInAllForests()
        },
        addForest(playerName) {
            const f = reactive(new Forest(playerName, this.forests))
            f.distributedScoring = useGameStore().distributedScoring
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
        addParam(playerName, cardName, paramName) {
            this.getForestByPlayerName(playerName).addParam(cardName, paramName)
            this.updatePointsInAllForests()
        },
        subParam(playerName, cardName, paramName) {
            this.getForestByPlayerName(playerName).subParam(cardName, paramName)
            this.updatePointsInAllForests()
        },
        setSymbolCount(playerName, symbol, count) {
            const forest = this.getForestByPlayerName(playerName)
            forest.setSymbolCount(symbol, count)
            this.updatePointsInAllForests()
        },
        addSymbolCount(playerName, symbol) {
            const forest = this.getForestByPlayerName(playerName)
            forest.setSymbolCount(symbol, forest.getSymbolCount(symbol) + 1)
            this.updatePointsInAllForests()
        },
        subSymbolCount(playerName, symbol) {
            const forest = this.getForestByPlayerName(playerName)
            forest.setSymbolCount(symbol, Math.max(0, forest.getSymbolCount(symbol) - 1))
            this.updatePointsInAllForests()
        },
        toggleParam(playerName, cardName, paramName) {
            this.getForestByPlayerName(playerName).toggleParam(cardName, paramName)
            this.updatePointsInAllForests()
        },
        setCaveCount(playerName, caveCount) {
            this.getForestByPlayerName(playerName).caveCount = caveCount
            this.updatePointsInAllForests()
        },
        updatePointsInAllForests() {
            for (let forest of this.forests)
                forest.updatePoints()
        },
        reset() {
            this.forests.forEach(f => f.reset())
            useGameStore().newGameStarted()
        },
        reinit(){
            this.forests = []
            for(let player of useGameStore().players){
                this.addForest(player.name)
            }
            useGameStore().newGameStarted()
        }
    }
})