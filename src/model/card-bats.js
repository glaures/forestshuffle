const defaultBatCalculatePoints = (forest, cardName) => {
        const distinctBats = forest.countDistinctBySymbol('bat')
        if(distinctBats >= 3)
            return forest.countByName(cardName) *  5
        else return 0
}

export const barbastelleBat = {
    name: 'barbastelleBat',
    position: 'side',
    symbols: ['bat'],
    recalculatePoints(forest) {
        this.points = defaultBatCalculatePoints(forest, this.name)
    }
}

export const bechsteinsBat = {
    name: 'bechsteinsBat',
    position: 'side',
    symbols: ['bat'],
    recalculatePoints(forest) {
        this.points = defaultBatCalculatePoints(forest, this.name)
    }
}

export const brownLongEaredBat = {
    name: 'brownLongEaredBat',
    position: 'side',
    symbols: ['bat'],
    recalculatePoints(forest) {
        this.points = defaultBatCalculatePoints(forest, this.name)
    }
}

export const greaterHorseshoeBat = {
    name: 'greaterHorseshoeBat',
    position: 'side',
    symbols: ['bat'],
    recalculatePoints(forest) {
        this.points = defaultBatCalculatePoints(forest, this.name)
    }
}

export const savisPipistrelle = {
    name: 'savisPipistrelle',
    position: 'side',
    symbols: ['bat', 'alps'],
    recalculatePoints(forest) {
        this.points = defaultBatCalculatePoints(forest, this.name)
    }
}

export const duererBat = {
    name: 'duererBat',
    position: 'side',
    symbols: ['bat'],
    hide: (gameStore) => !gameStore.duererExpansion,
    recalculatePoints(forest) {
        this.points = defaultBatCalculatePoints(forest, this.name)
    }
}

export const commonPipistrelle = {
    name: 'commonPipistrelle',
    position: 'side',
    symbols: ['bat', 'woodlandEdge'],
    recalculatePoints(forest) {
        this.points = defaultBatCalculatePoints(forest, this.name)
    }
}

export const allBats = [barbastelleBat, bechsteinsBat, brownLongEaredBat, greaterHorseshoeBat, savisPipistrelle, duererBat, commonPipistrelle]