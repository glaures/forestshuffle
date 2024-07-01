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

export const allBatsInBaseGame = [barbastelleBat, bechsteinsBat, brownLongEaredBat, greaterHorseshoeBat]