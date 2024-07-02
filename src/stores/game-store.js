import {defineStore} from "pinia";
import {i18n} from "/src/i18n/i18n.js"

export const useGameStore = defineStore('game', {
    state() {
        return {
            players: [],
            currentPlayer: null
        }
    },
    actions: {
        addPlayer(name) {
            if(this.players.find(p => p.name === name))
                throw new Error(i18n.t('error.nameTaken', [name]))
            this.players.push({name})
        },
        selectPlayer(name) {
            this.currentPlayer = this.players.find(p => p.name === name)
        }
    }
})

