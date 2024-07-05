export const blackberries = {
    name: 'blackberries',
    position: 'bottom',
    symbols: ['plant'],
    recalculatePoints(forest) {
        this.points = this.count * forest.countBySymbol('plant') * 2
    }
}

export const moss = {
    name: 'moss',
    position: 'bottom',
    symbols: ['plant'],
    recalculatePoints(forest) {
        if(forest.countBySymbol('tree') >= 10)
            this.points = this.count * 10
        else
            this.points = 0
    }
}

export const treeFerns = {
    name: 'treeFerns',
    position: 'bottom',
    symbols: ['plant'],
    recalculatePoints(forest) {
        this.points = this.count * forest.countBySymbol('amphibian') * 6
    }
}

export const wildStrawberries = {
    name: 'wildStrawberries',
    position: 'bottom',
    symbols: ['plant'],
    recalculatePoints(forest) {
        const differentTreeTypes = forest.cards.filter(c => c.symbols.indexOf('tree') >= 0 && c.name !== 'treeSaplings' && c.count > 0).length
        if (differentTreeTypes >= 8)
            this.points = this.count * 10
        else this.points = 0
    }
}

export const edelweiss = {
    name: 'edelweiss',
    position: 'bottom',
    symbols: ['plant', 'alps'],
    recalculatePoints(forest) {
        this.points = this.count * 3
    }
}

export const blueberry = {
    name: 'blueberry',
    position: 'bottom',
    symbols: ['plant', 'alps'],
    recalculatePoints(forest) {
        this.points = this.count * 2 * forest.countDistinctBySymbol('bird')
    }
}

export const gentian = {
    name: 'gentian',
    position: 'bottom',
    symbols: ['plant', 'alps'],
    recalculatePoints(forest) {
        this.points = this.count * 3 * forest.countBySymbol('butterfly')
    }
}

export const allPlants = [blackberries, treeFerns, wildStrawberries, moss, edelweiss, blueberry, gentian]

