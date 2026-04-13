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
        const fireflyCount = forest.countByName('fireflies')
        const saysFireflyCount = forest.countByName('saysFirefly')
        const total = fireflyCount + saysFireflyCount
        const totalPoints = [0, 0, 10, 15, 20][Math.min(4, total)]
        // Anteil dieser Kartenart an den Gesamtpunkten
        const ownCount = forest.countByName(this.name)
        this.points = total > 0 ? Math.round(totalPoints * ownCount / total) : 0
    }
}

export const saysFirefly = {
    ...fireflies,
    hide: (gameStore) => !gameStore.explorationExpansion,
    name: 'saysFirefly'
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

export const greatGreenBushCricket = {
    name: 'greatGreenBushCricket',
    position: 'bottom',
    symbols: ['insect', 'woodlandEdge'],
    recalculatePoints(forest) {
        this.points = this.count * forest.countBySymbol('insect')
    }
}

export const beeSwarm = {
    name: 'beeSwarm',
    position: 'side',
    symbols: ['insect', 'woodlandEdge'],
    recalculatePoints(forest) {
        this.points = this.count * forest.countBySymbol('plant')
    }
}

export const craneFly = {
    name: 'craneFly',
    position: 'side',
    symbols: ['insect', 'woodlandEdge'],
    recalculatePoints(forest) {
        this.points = this.count * forest.countBySymbol('bat')
    }
}


export const allInsects = [gnat, fireflies, woodAnt, stagBeetle, violetCarpenterBee, greatGreenBushCricket, beeSwarm, craneFly,
saysFirefly]

