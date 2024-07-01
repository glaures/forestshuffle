export const hedgehog = {
    name: 'hedgehog',
    position: 'bottom',
    symbols: ['pawedAnimal'],
    recalculatePoints(forest) {
        this.points = this.count * forest.countBySymbol('butterfly') * 2
    }
}

export const mole = {
    name: 'mole',
    position: 'bottom',
    symbols: ['pawedAnimal'],
    recalculatePoints(forest) {
        this.points = this.count * forest.countBySymbol('pawedAnimal') * 2
    }
}

export const beechMarten = {
    name: 'beechMarten',
    position: 'side',
    symbols: ['pawedAnimal'],
    params: [{
        name: 'fullyOccupiedTrees',
        type: 'number',
        value: 0,
        unrestricted: true
    }],
    recalculatePoints(forest) {
        this.points = this.count * 5 * this.params[0].value
    }
}

export const allPawedInBaseGame = [hedgehog, mole, beechMarten]