import {defineStore} from "pinia";
import {i18n} from "/src/i18n/i18n.js"

export const useGameStore = defineStore('game', {
    state() {
        return {
            players: [],
            currentPlayer: null,
            alpineExpansion: true
        }
    },
    actions: {
        addPlayer(name) {
            this.players.push({name})
        },
        updatePlayerName(oldName, newName){
            if(this.players.find(p => p.name !== oldName && p.name === newName))
                throw new Error(i18n.t('error.nameTaken', [name]))
            const idx = this.players.findIndex(p => p.name === oldName)
            this.players[idx].name = newName
        },
        selectPlayer(name) {
            this.currentPlayer = this.players.find(p => p.name === name)
        },
        resetPlayers(){
            this.players = []
            this.currentPlayer = null
        },
        toggleAlpineExpansion(){
            this.alpineExpansion = !this.alpineExpansion
        }
    }
})

