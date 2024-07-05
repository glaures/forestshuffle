export const bullfinch = {
    name: 'bullfinch',
    position: 'top',
    symbols: ['bird'],
    recalculatePoints(forest) {
        this.points = this.count * forest.countBySymbol('insect') * 2
    }
}

export const chaffinch = {
    name: 'chaffinch',
    position: 'top',
    symbols: ['bird'],
    params: [{
        name: 'chaffinchesAtopABeech',
        type: 'number',
        value: 0
    }],
    recalculatePoints(forest) {
        this.points = this.params[0].value * 5
    }
}

export const eurasianJay = {
    name: 'eurasianJay',
    position: 'top',
    symbols: ['bird'],
    recalculatePoints(forest) {
        this.points = this.count * 3
    }
}

export const goshawk = {
    name: 'goshawk',
    position: 'top',
    symbols: ['bird'],
    recalculatePoints(forest) {
        this.points = this.count * forest.countBySymbol('bird') * 3
    }
}

export const greatSpottedWoodpecker = {
    name: 'greatSpottedWoodpecker',
    position: 'top',
    symbols: ['bird'],
    recalculatePoints(forest) {
        this.points = forest.hasMostOfSymbol("tree")
            ? this.count * 10
            : 0
    }
}

export const tawnyOwl = {
    name: 'tawnyOwl',
    position: 'top',
    symbols: ['bird'],
    recalculatePoints(forest) {
        this.points = this.count * 5
    }
}

export const capercaillie = {
    name: 'capercaillie',
    position: 'top',
    symbols: ['bird', 'alps'],
    recalculatePoints(forest) {
        this.points = this.count * forest.countBySymbol('plant')
    }
}

export const goldenEagle = {
    name: 'goldenEagle',
    position: 'top',
    symbols: ['bird', 'alps'],
    recalculatePoints(forest) {
        this.points = this.count * (forest.countBySymbol('pawedAnimal') + forest.countBySymbol('amphibian'))
    }
}

export const beardedVulture = {
    name: 'beardedVulture',
    position: 'top',
    symbols: ['bird', 'alps'],
    recalculatePoints(forest) {
        this.points = this.count * forest.caveCount
    }
}

export const commonRaven = {
    name: 'commonRaven',
    position: 'top',
    symbols: ['bird', 'alps'],
    recalculatePoints(forest) {
        this.points = this.count * 5
    }
}

export const allBirds = [bullfinch, chaffinch, eurasianJay, goshawk, greatSpottedWoodpecker, tawnyOwl, capercaillie, goldenEagle, beardedVulture, commonRaven]

