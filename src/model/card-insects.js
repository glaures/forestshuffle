export const gnat = {
    name: 'gnat',
    position: 'side',
    symbols: ['insect'],
    recalculatePoints(forest) {
        this.points = forest.countByName('gnat') * forest.countBySymbol('bat')
    }
}

export const fireflies = {
    name: 'fireflies',
    position: 'bottom',
    symbols: ['insect'],
    recalculatePoints(forest) {
        this.points = [0, 0, 10, 15, 20][Math.min(4, this.count)]
    }
}

export const woodAnt = {
    name: 'woodAnt',
    position: 'bottom',
    symbols: ['insect'],
    recalculatePoints(forest) {
        this.points = this.count * forest.countByPosition('bottom') * 2
    }
}

export const stagBeetle = {
    name: 'stagBeetle',
    position: 'bottom',
    symbols: ['insect'],
    recalculatePoints(forest) {
        this.points = this.count * forest.countBySymbol('pawedAnimal')
    }
}

export const violetCarpenterBee = {
    name: 'violetCarpenterBee',
    position: 'side',
    symbols: ['insect'],
    params: [
        {
            name: 'onABeech',
            type: 'number',
            value: 0
        },
        {
            name: 'onAHorseChestnut',
            type: 'number',
            value: 0
        },
        {
            name: 'onALinden',
            type: 'number',
            value: 0
        }
    ],
    recalculatePoints(forest) {
    }
}


export const allInsects = [gnat, fireflies, woodAnt, stagBeetle, violetCarpenterBee]

