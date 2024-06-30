export const beech = {
    name: 'beech',
    type: 'beech',
    symbols: ['tree'],
    recalculatePoints(forest) {
        const count = forest.countByName('beech')
        if (count >= 4)
            this.points = count * 5
        else
            this.points = 0
    }
}

export const birch = {
    name: 'birch',
    type: 'birch',
    symbols: ['tree'],
    recalculatePoints(forest) {
        this.points = forest.countByName('birch')
    }
}

export const douglasFir = {
    name: 'douglasFir',
    type: 'douglasFir',
    symbols: ['tree'],
    recalculatePoints(forest) {
        this.points = forest.countByName('douglasFir') * 5
    }
}

export const horseChestnut = {
    name: 'horseChestnut',
    type: 'horseChestnut',
    symbols: ['tree'],
    recalculatePoints(forest) {
        const count = Math.min(forest.countByName('horseChestnut'), 7)
        this.points = count * count
    }
}

export const linden = {
    name: 'linden',
    type: 'linden',
    symbols: ['tree'],
    recalculatePoints(forest) {
        const lindensInThisForest = forest.countByName('linden')
        this.points = lindensInThisForest * (forest.hasMostOfName("linden") ? 3 : 1)
    }
}

export const oak = {
    name: 'oak',
    type: 'oak',
    symbols: ['tree'],
    recalculatePoints(forest) {
        const differentTreeTypes = forest.cards.filter(c => c.type === 'tree' && c.name !== 'treeSaplings' && c.count > 0).length
        if (differentTreeTypes === 8)
            this.points = forest.countByName('oak') * 10
        else this.points = 0
    }
}

export const silverFir = {
    name: 'silverFir',
    type: 'silverFir',
    symbols: ['tree'],
    params: [
        {
            name: 'cardsAttachedToSilverFirs',
            type: 'number',
            value: 0
        }
    ],
    recalculatePoints(forest) {
        this.points = this.params[0].value * 2
    }
}

export const sycamore = {
    name: 'sycamore',
    type: 'sycamore',
    symbols: ['tree'],
    recalculatePoints(forest) {
        this.points = forest.countByName('sycamore') * forest.countBySymbol('tree')
    }
}

export const treeSaplings = {
    name: 'treeSaplings',
    type: 'none',
    symbols: ['tree'],
    recalculatePoints(forest) {
    }
}






