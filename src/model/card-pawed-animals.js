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


export const allPawedInBaseGame = [hedgehog, mole]