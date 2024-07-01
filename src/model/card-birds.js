export const bullfinch = {
    name: 'bullfinch',
    type: 'douglasFir',
    symbols: ['bird'],
    recalculatePoints(forest) {
        this.points = forest.countByName('douglasFir') * forest.countBySymbol('insect')
    }
}

export const chaffinch = {
    name: 'chaffinch',
    type: 'sycamore',
    symbols: ['bird'],
    param: {
        name: 'chaffinchesAtopABeech',
        type: 'number',
        value: 0
    },
    recalculatePoints(forest) {
        this.points = this.param.value * 5
    }
}

export const eurasianJay = {
    name: 'eurasianJay',
    type: 'birch',
    symbols: ['bird'],
    recalculatePoints(forest) {
        this.points = forest.countByName('eurasianJay') * 3
    }
}

export const goshawk = {
    name: 'goshawk',
    type: 'silverFir',
    symbols: ['bird'],
    recalculatePoints(forest) {
        this.points = forest.countByName('goshawk') * forest.countBySymbol('bird')
    }
}

export const greatSpottedWoodpecker = {
    name: 'greatSpottedWoodpecker',
    type: 'linden',
    symbols: ['bird'],
    recalculatePoints(forest) {
        this.points = forest.hasMostOfSymbol("tree")
            ? forest.countByName('greatSpottedWoodpecker') * 10
            : 0
    }
}

export const tawnyOwl = {
    name: 'tawnyOwl',
    type: 'beech',
    symbols: ['bird'],
    recalculatePoints(forest) {
        this.points = forest.countByName('tawnyOwl') * 5
    }
}

export const allBirdsInBaseGame = [bullfinch, chaffinch, eurasianJay, goshawk, greatSpottedWoodpecker, tawnyOwl]

