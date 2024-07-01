export const blackberries = {
    name: 'blackberries',
    position: 'bottom',
    type: 'beech',
    symbols: ['plant'],
    recalculatePoints(forest) {
        this.points = forest.countByName('blackberries') * forest.countBySymbol('plant') * 2
    }
}

export const moss = {
    name: 'moss',
    position: 'bottom',
    type: 'linden',
    symbols: ['plant'],
    recalculatePoints(forest) {
        if(forest.countBySymbol('tree') >= 10)
            this.points = forest.countByName('moss') * 10
        else
            this.points = 0
    }
}

export const treeFerns = {
    name: 'treeFerns',
    position: 'bottom',
    type: 'silverFir',
    symbols: ['plant'],
    recalculatePoints(forest) {
        this.points = forest.countByName('treeFerns') * forest.countBySymbol('amphibian') * 6
    }
}

export const wildStrawberries = {
    name: 'wildStrawberries',
    position: 'bottom',
    type: 'sycamore',
    symbols: ['plant'],
    recalculatePoints(forest) {
        const differentTreeTypes = forest.cards.filter(c => c.symbols.indexOf('tree') >= 0 && c.name !== 'treeSaplings' && c.count > 0).length
        if (differentTreeTypes === 8)
            this.points = forest.countByName('wildStrawberries') * 10
        else this.points = 0
    }
}

export const allPlantsInBaseGame = [blackberries, treeFerns, wildStrawberries, moss]

