export const fallowDeer = {
    name: 'fallowDeer',
    position: 'side',
    symbols: ['deer', 'clovenHoofedAnimal'],
    recalculatePoints(forest) {
        this.points = forest.countByName('fallowDeer') * 3 * forest.countBySymbol('clovenHoofedAnimal')
    }
}

export const redDeer = {
    name: 'redDeer',
    position: 'side',
    symbols: ['deer', 'clovenHoofedAnimal'],
    recalculatePoints(forest) {
        this.points = forest.countByName('redDeer') * (forest.countBySymbol('plant') + forest.countBySymbol('tree'))
    }
}

export const roeDeerBeech = {
    name: 'roeDeerBeech',
    type: 'beech',
    position: 'side',
    symbols: ['deer', 'clovenHoofedAnimal'],
    params: [{
        name: 'beechCount',
        type: 'type',
        symbol: 'beech',
        value: 0,
        unrestricted: true
    }],
    recalculatePoints(forest) {
        this.points = this.count * forest.beechCount * 3
    }
}

export const roeDeerBirch = {
    name: 'roeDeerBirch',
    type: 'birch',
    position: 'side',
    symbols: ['deer', 'clovenHoofedAnimal'],
    params: [{
        name: 'birchCount',
        type: 'type',
        symbol: 'birch',
        value: 0,
        unrestricted: true
    }],
    recalculatePoints(forest) {
        this.points = this.count * forest.birchCount * 3
    }
}

export const roeDeerHorseChestnut = {
    name: 'roeDeerHorseChestnut',
    type: 'horseChestnut',
    position: 'side',
    symbols: ['deer', 'clovenHoofedAnimal'],
    params: [{
        name: 'horseChestnutCount',
        type: 'type',
        symbol: 'horseChestnut',
        value: 0,
        unrestricted: true
    }],
    recalculatePoints(forest) {
        this.points = this.count * forest.horseChestnutCount * 3
    }
}

export const roeDeerLinden = {
    name: 'roeDeerLinden',
    type: 'linden',
    position: 'side',
    symbols: ['deer', 'clovenHoofedAnimal'],
    params: [{
        name: 'lindenCount',
        type: 'type',
        symbol: 'linden',
        value: 0,
        unrestricted: true
    }],
    recalculatePoints(forest) {
        this.points = this.count * forest.lindenCount * 3
    }
}

export const roeDeerSilverFir = {
    name: 'roeDeerSilverFir',
    type: 'silverFir',
    position: 'side',
    symbols: ['deer', 'clovenHoofedAnimal'],
    params: [{
        name: 'silverFirCount',
        type: 'type',
        symbol: 'silverFir',
        value: 0,
        unrestricted: true
    }],
    recalculatePoints(forest) {
        this.points = this.count * forest.silverFirCount * 3
    }
}

export const squeaker = {
    name: 'squeaker',
    position: 'side',
    symbols: ['clovenHoofedAnimal'],
    recalculatePoints(forest) {
        this.points = this.count
    }
}

export const squeakerWE = {
    name: 'squeakerWE',
    position: 'side',
    symbols: ['clovenHoofedAnimal', 'woodlandEdge'],
    recalculatePoints(forest) {
        this.points = this.count
    }
}

export const wildBoar = {
    name: 'wildBoar',
    position: 'side',
    symbols: ['clovenHoofedAnimal'],
    recalculatePoints(forest) {
        const squeakerPresent = (forest.countByName('squeaker') + forest.countByName('squeakerWE')) > 0
        this.points = this.count * 10 * (squeakerPresent  ? 1 : 0)
    }
}

export const wildBoarFemale = {
    name: 'wildBoarFemale',
    position: 'side',
    symbols: ['clovenHoofedAnimal', 'woodlandEdge'],
    recalculatePoints(forest) {
        this.points = this.count * 10 * (forest.countByName('squeaker') + forest.countByName('squeakerWE'))
    }
}

export const chamoisStonePine = {
    name: 'chamoisStonePine',
    position: 'side',
    symbols: ['clovenHoofedAnimal', 'alps', 'stonePine'],
    params: [{
        name: 'stonePineCount',
        type: 'type',
        symbol: 'stonePine',
        value: 0,
        unrestricted: true
    }],
    recalculatePoints(forest) {
        this.points = this.count * forest.stonePineCount * 3
    }
}

export const chamoisEuropeanLarch = {
    name: 'chamoisEuropeanLarch',
    position: 'side',
    symbols: ['clovenHoofedAnimal', 'alps', 'europeanLarch'],
    params: [{
        name: 'europeanLarchCount',
        type: 'type',
        symbol: 'europeanLarch',
        value: 0,
        unrestricted: true
    }],
    recalculatePoints(forest) {
        this.points = this.count * forest.europeanLarchCount * 3
    }
}

export const chamoisDouglasFir = {
    name: 'chamoisDouglasFir',
    position: 'side',
    symbols: ['clovenHoofedAnimal', 'alps', 'douglasFir'],
    params: [{
        name: 'douglasFirCount',
        type: 'type',
        symbol: 'douglasFir',
        value: 0,
        unrestricted: true
    }],
    recalculatePoints(forest) {
        this.points = this.count * forest.douglasFirCount * 3
    }
}

export const steinbock = {
    name: 'steinbock',
    position: 'side',
    symbols: ['clovenHoofedAnimal', 'alps'],
    recalculatePoints(forest) {
        this.points = this.count * 10
    }
}

export const europeanBison = {
    name: 'europeanBison',
    position: 'side',
    symbols: ['clovenHoofedAnimal', 'woodlandEdge'],
    params: [{
        name: 'beechCount',
        type: 'type',
        symbol: 'beech',
        value: 0,
        unrestricted: true
    }, {
        name: 'oakCount',
        type: 'type',
        symbol: 'oak',
        value: 0,
        unrestricted: true
    }],
    recalculatePoints(forest) {
        this.points = 2 * this.count * (forest.beechCount + forest.oakCount)
    }
}


export const allDeers = [fallowDeer, redDeer, roeDeerBeech, roeDeerLinden, roeDeerSilverFir, roeDeerHorseChestnut, roeDeerBirch, squeaker, squeakerWE, wildBoar, wildBoarFemale, chamoisDouglasFir, chamoisEuropeanLarch, chamoisStonePine, steinbock, europeanBison]
