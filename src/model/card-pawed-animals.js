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

export const brownBear = {
    name: 'brownBear',
    position: 'side',
    symbols: ['pawedAnimal'],
    recalculatePoints(forest) {
    }
}

export const europeanBadger = {
    name: 'europeanBadger',
    position: 'side',
    symbols: ['pawedAnimal'],
    recalculatePoints(forest) {
        this.points = this.count * 2
    }
}

export const europeanFatDormouse = {
    name: 'europeanFatDormouse',
    position: 'side',
    symbols: ['pawedAnimal'],
    params: [
        {
            name: 'batOnTheOtherSide',
            type: 'number',
            value: 0
        }
    ],
    recalculatePoints(forest) {
        this.points = this.params[0].value * 15
    }
}

export const europeanHare = {
    name: 'europeanHare',
    position: 'side',
    symbols: ['pawedAnimal'],
    recalculatePoints(forest) {
        this.points = forest.countByName("europeanHare") * this.count
    }
}

export const lynx = {
    name: 'lynx',
    position: 'side',
    symbols: ['pawedAnimal'],
    recalculatePoints(forest) {
        if (forest.countByName('roeDeerBeech')
            + forest.countByName('roeDeerBirch')
            + forest.countByName('roeDeerHorseChestnut')
            + forest.countByName('roeDeerLinden')
            + forest.countByName('roeDeerSilverFir') > 0)
            this.points = this.count * 10
        else
            this.points = 0
    }
}

export const raccoon = {
    name: 'raccoon',
    position: 'side',
    symbols: ['pawedAnimal'],
    recalculatePoints(forest) {
    }
}

export const redFox = {
    name: 'redFox',
    position: 'side',
    symbols: ['pawedAnimal'],
    recalculatePoints(forest) {
        this.points = this.count * forest.countByName("europeanHare") * 2
    }
}

export const wolf = {
    name: 'wolf',
    position: 'side',
    symbols: ['pawedAnimal'],
    recalculatePoints(forest) {
        this.points = this.count * 5 * forest.countBySymbol('deer')
    }
}



export const allPawedInBaseGame = [hedgehog, mole, beechMarten, brownBear, europeanBadger, europeanFatDormouse, europeanHare, lynx, raccoon, redFox, wolf]