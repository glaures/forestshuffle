export const bullfinch = {
    name: 'bullfinch',
    position: 'top',
    symbols: ['bird'],
    recalculatePoints(forest) {
        this.points = forest.countByName('douglasFir') * forest.countBySymbol('insect')
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
        this.points = forest.countByName('eurasianJay') * 3
    }
}

export const goshawk = {
    name: 'goshawk',
    position: 'top',
    symbols: ['bird'],
    recalculatePoints(forest) {
        this.points = forest.countByName('goshawk') * forest.countBySymbol('bird')
    }
}

export const greatSpottedWoodpecker = {
    name: 'greatSpottedWoodpecker',
    position: 'top',
    symbols: ['bird'],
    recalculatePoints(forest) {
        this.points = forest.hasMostOfSymbol("tree")
            ? forest.countByName('greatSpottedWoodpecker') * 10
            : 0
    }
}

export const tawnyOwl = {
    name: 'tawnyOwl',
    position: 'top',
    symbols: ['bird'],
    recalculatePoints(forest) {
        this.points = forest.countByName('tawnyOwl') * 5
    }
}

export const allBirdsInBaseGame = [bullfinch, chaffinch, eurasianJay, goshawk, greatSpottedWoodpecker, tawnyOwl]

