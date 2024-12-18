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

    distributedScoring = false

    constructor(playerName, allForests) {
        this.playerName = playerName
        this.allForests = allForests
        this.reset()
    }

    reset() {
        this.butterflyPoints = 0
        this.silverFirCount = 0
        this.lindenCount = 0
        this.horseChestnutCount = 0
        this.birchCount = 0
        this.beechCount = 0
        this.sycamoreCount = 0
        this.douglasFirCount = 0
        this.oakCount = 0
        this.europeanLarchCount = 0
        this.stonePineCount = 0
        this.caveCount = 0
        this.points = 0
        this.cards = []
        for (let card of cards) {
            const clonedCard = {...card}
            if (card.params)
                clonedCard.params = card.params.map(param => {
                    return {...param}
                })
            this.cards.push({
                ...clonedCard,
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
        if (c.count === 0 && c.params) {
            c.params.forEach(p => p.value = 0)
        }
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

    toggleParam(cardName, paramName) {
        const card = this.findCard(cardName)
        const param = card.params.find(p => p.name === paramName)
        param.value = !param.value
    }

    updatePoints() {
        let points = 0
        for (let card of this.cards) {
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
        return this.cards.filter(c => c.symbols.filter(s => s === symbolName).length > 0)
            .reduce((sum, c) => sum += c.count, 0)
    }

    countTreesIncludingVioletCarpenterBee() {
        let count = this.countBySymbol('tree')
        const violetCarpenterBee = this.cards.find(c => c.name === 'violetCarpenterBee')
        for (let param of violetCarpenterBee.params)
            count += param.value
        return count;
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
        const otherForests = this.allForests.filter(f => f.playerName !== this.playerName)
        for (let otherForest of otherForests) {
            if (otherForest.countByName(cardName) > inThisForest)
                noOtherForestHasMore = false
        }
        return noOtherForestHasMore
    }

    hasMostOfSymbol(symbolName) {
        let inThisForest = this.countBySymbol(symbolName)
        let noOtherForestHasMore = true
        const otherForests = this.allForests.filter(f => f.playerName !== this.playerName)
        for (let otherForest of otherForests) {
            let inOtherForest = otherForest.countBySymbol(symbolName)
            if (inOtherForest > inThisForest)
                noOtherForestHasMore = false
        }
        return noOtherForestHasMore
    }

    hasMostTrees(){
        let inThisForest = this.countTreesIncludingVioletCarpenterBee()
        let noOtherForestHasMore = true
        const otherForests = this.allForests.filter(f => f.playerName !== this.playerName)
        for (let otherForest of otherForests) {
            let inOtherForest = otherForest.countTreesIncludingVioletCarpenterBee()
            if (inOtherForest > inThisForest)
                noOtherForestHasMore = false
        }
        return noOtherForestHasMore
    }

    treeCount() {
        return this.countBySymbol('tree')
    }

    treeCardsCount() {
        return this.cards.filter(c => (c.symbols.filter(s => s === 'tree').length > 0 || c.symbols.filter(s => s === 'shrub').length > 0))
            .reduce((sum, c) => sum += c.count, 0)
    }

    topCount() {
        return this.countByPosition('top')
    }

    bottomCount() {
        return this.countByPosition('bottom')
    }

    sideCount() {
        return this.countByPosition('side')
    }

    treePoints() {
        return this.cards.filter(c => c.symbols.indexOf('tree') >= 0 || c.symbols.indexOf('shrub') >= 0)
            .map(c => c.points)
            .reduce((p, sum) => sum += p)
    }

    bottomPoints() {
        return this.cards.filter(c => c.position === 'bottom')
            .map(c => c.points)
            .reduce((p, sum) => sum += p)
    }

    topPoints() {
        let scoreWithoutButterflies = this.cards.filter(c => c.position === 'top')
            .map(c => c.points)
            .reduce((p, sum) => sum += p)
        return scoreWithoutButterflies + this.butterflyPoints
    }

    sidePoints() {
        return this.cards.filter(c => c.position === 'side')
            .map(c => c.points)
            .reduce((p, sum) => sum += p)
    }
}
