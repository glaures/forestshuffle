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

export const numberOfHare = (forest) => forest.countByName("europeanHare") + forest.countByName("mountainHare")

export const europeanHare = {
    name: 'europeanHare',
    position: 'side',
    symbols: ['pawedAnimal'],
    recalculatePoints(forest) {
        this.points = this.count * numberOfHare(forest)
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
        this.points = this.count * numberOfHare(forest) * 2
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

export const alpineMarmot = {
    name: 'alpineMarmot',
    position: 'side',
    symbols: ['pawedAnimal', 'alps'],
    recalculatePoints(forest) {
        this.points = this.count * 3 * forest.countDistinctBySymbol('plant')
    }
}

export const mountainHare = {
    name: 'mountainHare',
    position: 'side',
    symbols: ['pawedAnimal', 'alps'],
    recalculatePoints(forest) {
        this.points = this.count * numberOfHare(forest)
    }
}

export const waterVole = {
    name: 'waterVole',
    position: 'bottom',
    symbols: ['pawedAnimal', 'woodlandEdge'],
    recalculatePoints(forest) {
    }
}

export const europeanWildcat = {
    name: 'europeanWildcat',
    position: 'side',
    symbols: ['pawedAnimal', 'woodlandEdge'],
    recalculatePoints(forest) {
        this.points = this.count * forest.countBySymbol('woodlandEdge')
    }
}

export const europeanPolecat = {
    name: 'europeanPolecat',
    position: 'side',
    symbols: ['pawedAnimal', 'woodlandEdge'],
    params: [
        {
            name: 'europeanPolecatAloneOnTreeOrShrub',
            type: 'number',
            value: 0
        }
    ],
    recalculatePoints() {
        this.points = 10 * this.params[0].value
    }
}

export const meeps = {
    name: 'meeps',
    position: 'side',
    symbols: ['pawedAnimal', 'woodlandEdge'],
    hide: (gameStore) => !gameStore.spiel24Promo,
    recalculatePoints(forest) {
        this.points = this.count * forest.countBySymbol('woodlandEdge')
    }
}

export const allPawed = [hedgehog, mole, beechMarten, brownBear, europeanBadger, europeanFatDormouse, europeanHare, lynx, raccoon, redFox, wolf, alpineMarmot, mountainHare, waterVole, europeanWildcat, europeanPolecat, meeps]
