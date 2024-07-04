/**
 * a forest is an object of this type:
 * {
 *     playerName: 'player',
 *     points: 0,
 *     cards: [
 *      {
 *          name: 'beech',
 *          count: 3
 *      },
 *      {
 *          name: 'birch',
 *          count: 1
 *      }
 *     ]
 *
 * }
 */
import cards from "@/model/cards.js";
import {calculateButterflyPoints} from "@/model/card-butterflies.js";

export class Forest {

    constructor(playerName, allForests) {
        this.playerName = playerName
        this.allForrests = allForests
        this.reset()
    }

    reset(){
        this.butterflyPoints = 0
        this.silverFirCount = 0
        this.lindenCount = 0
        this.horseChestnutCount = 0
        this.birchCount = 0
        this.beechCount = 0
        this.caveCount = 0
        this.points = 0
        this.cards = []
        for (let card of cards) {
            this.cards.push({
                ...card,
                count: 0,
                points: 0
            })
        }
    }

    getSymbolCount(symbol) {
        return this[symbol + 'Count']
    }

    setSymbolCount(symbol, count) {
        this[symbol + 'Count'] = count
        this.updatePoints()
    }

    findCard(cardName) {
        return this.cards[this.cards.findIndex(c => c.name === cardName)]
    }

    addCard(cardName) {
        ++this.findCard(cardName).count
    }

    removeCard(cardName) {
        const c = this.findCard(cardName)
        c.count = Math.max(0, --c.count)
    }

    addParam(cardName, paramName) {
        const card = this.findCard(cardName)
        const param = card.params.find(p => p.name === paramName)
        param.value = Math.min(param.unrestricted ? 99 : card.count, param.value + 1)
    }

    subParam(cardName, paramName) {
        const card = this.findCard(cardName)
        const param = card.params.find(p => p.name === paramName)
        param.value = Math.max(0, param.value - 1)
    }

    updatePoints() {
        let points = 0
        for (let card of this.cards.filter(c => c.count > 0)) {
            card.recalculatePoints(this)
            points += card.points
        }
        this.butterflyPoints = calculateButterflyPoints(this)
        this.points = points + this.butterflyPoints + this.caveCount
    }

    countByName(cardName) {
        let count = this.cards.find(c => c.name === cardName).count
        if (cardName === 'linden') {
            count += this.cards.find(c => c.name === 'violetCarpenterBee').params[2].value
        }
        return count
    }

    countBySymbol(symbolName) {
        let count = this.cards.filter(c => c.symbols.filter(s => s === symbolName).length > 0)
            .reduce((sum, c) => sum += c.count, 0)
        if (symbolName === 'tree') {
            const violetCarpenterBee = this.cards.find(c => c.name === 'violetCarpenterBee')
            for (let param of violetCarpenterBee.params)
                count += param.value
        }
        return count
    }

    countByPosition(position) {
        return this.cards.filter(c => c.position === position)
            .reduce((sum, c) => sum += c.count, 0)
    }

    countDistinctBySymbol(symbolName) {
        return this.cards.filter(c => c.symbols.filter(s => s === symbolName).length > 0)
            .filter(c => c.count > 0)
            .length
    }

    hasMostOfName(cardName) {
        const inThisForest = this.countByName(cardName)
        let noOtherForestHasMore = true
        const otherForests = this.allForrests.filter(f => f.playerName !== this.playerName)
        for (let otherForest of otherForests) {
            if (otherForest.countByName(cardName) > inThisForest)
                noOtherForestHasMore = false
        }
        return noOtherForestHasMore
    }

    hasMostOfSymbol(symbolName) {
        let inThisForest = this.countBySymbol(symbolName)
        let noOtherForestHasMore = true
        const otherForests = this.allForrests.filter(f => f.playerName !== this.playerName)
        for (let otherForest of otherForests) {
            let inOtherForest = otherForest.countBySymbol(symbolName)
            if (inOtherForest > inThisForest)
                noOtherForestHasMore = false
        }
        return noOtherForestHasMore
    }

    roeDeerPresent() {
        return this.countByName('roeDeerBeech')
            + this.countByName('roeDeerBirch')
            + this.countByName('roeDeerHorseChestnut')
            + this.countByName('roeDeerLinden')
            + this.countByName('roeDeerSilverFir')
            > 0
    }
}
