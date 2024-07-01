export const bullfinch = {
    name: 'bullfinch',
    position: 'top',
    type: 'douglasFir',
    symbols: ['bird'],
    recalculatePoints(forest) {
        this.points = forest.countByName('douglasFir') * forest.countBySymbol('insect')
    }
}

export const chaffinch = {
    name: 'chaffinch',
    position: 'top',
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
    position: 'top',
    type: 'birch',
    symbols: ['bird'],
    recalculatePoints(forest) {
        this.points = forest.countByName('eurasianJay') * 3
    }
}

export const goshawk = {
    name: 'goshawk',
    position: 'top',
    type: 'silverFir',
    symbols: ['bird'],
    recalculatePoints(forest) {
        this.points = forest.countByName('goshawk') * forest.countBySymbol('bird')
    }
}

export const greatSpottedWoodpecker = {
    name: 'greatSpottedWoodpecker',
    position: 'top',
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
    position: 'top',
    type: 'beech',
    symbols: ['bird'],
    recalculatePoints(forest) {
        this.points = forest.countByName('tawnyOwl') * 5
    }
}

export const allBirdsInBaseGame = [bullfinch, chaffinch, eurasianJay, goshawk, greatSpottedWoodpecker, tawnyOwl]

