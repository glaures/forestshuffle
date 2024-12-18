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
        if(forest.countTreesIncludingVioletCarpenterBee() >= 10)
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

export const digitalis = {
    name: 'digitalis',
    position: 'bottom',
    symbols: ['plant', 'woodlandEdge'],
    recalculatePoints(forest) {
        const pointsByDistinctPlants = [0, 1, 3, 6, 10, 15]
        this.points = this.count * pointsByDistinctPlants[(Math.min(5, forest.countDistinctBySymbol('plant')))]
    }
}

export const stingingNettle = {
    name: 'stingingNettle',
    position: 'bottom',
    symbols: ['plant', 'woodlandEdge'],
    recalculatePoints(forest) {
        this.points = 2 * this.count * forest.countBySymbol('butterfly')
    }
}

export const maretak = {
    name: 'maretak',
    position: 'top',
    symbols: ['plant', 'woodlandEdge'],
    hide: (gameStore) => !gameStore.maretakPromo,
    recalculatePoints(forest) {
        this.points = this.count * forest.countBySymbol('plant')
    }
}

export const bostulp = {
    name: 'bostulp',
    position: 'bottom',
    symbols: ['plant', 'woodlandEdge'],
    hide: (gameStore) => !gameStore.maretakPromo,
    recalculatePoints(forest) {
        this.points = 3 * this.count
    }
}

export const allPlants = [blackberries, treeFerns, wildStrawberries, moss, edelweiss, blueberry, gentian, digitalis, stingingNettle, maretak, bostulp]

