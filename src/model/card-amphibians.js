export const commonToad= {
    name: 'commonToad',
    position: 'bottom',
    symbols: ['amphibian'],
    params: [{
        name: 'sharingACardSlot',
        type: 'number',
        value: 0
    }],
    recalculatePoints(forest) {
        this.points = this.params[0].value * 5
    }
}

export const pondTurtle= {
    name: 'pondTurtle',
    position: 'bottom',
    symbols: ['amphibian'],
    recalculatePoints(forest) {
        this.points = this.count * 5
    }
}

export const treeFrog= {
    name: 'treeFrog',
    position: 'bottom',
    symbols: ['amphibian'],
    recalculatePoints(forest) {
        this.points = this.count * forest.countByName("gnat") * 5
    }
}

export const fireSalamander= {
    name: 'fireSalamander',
    position: 'bottom',
    symbols: ['amphibian'],
    recalculatePoints(forest) {
        this.points = [0, 5, 15, 25][Math.min(3, this.count)]
    }
}

export const alpineNewt= {
    name: 'alpineNewt',
    position: 'bottom',
    symbols: ['amphibian', 'alps'],
    recalculatePoints(forest) {
        this.points = this.count * 2 * forest.countBySymbol('insect')
    }
}

export const allAmphibians = [commonToad, pondTurtle, treeFrog, fireSalamander, alpineNewt]

