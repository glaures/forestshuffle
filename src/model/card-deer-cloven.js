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
    position: 'side',
    symbols: ['deer', 'clovenHoofedAnimal'],
    recalculatePoints(forest) {
        this.points = this.count * forest.beechCount * 3
    }
}

export const roeDeerBirch = {
    name: 'roeDeerBirch',
    position: 'side',
    symbols: ['deer', 'clovenHoofedAnimal'],
    recalculatePoints(forest) {
        this.points = this.count * forest.birchCount * 3
    }
}

export const roeDeerHorseChestnut = {
    name: 'roeDeerHorseChestnut',
    position: 'side',
    symbols: ['deer', 'clovenHoofedAnimal'],
    recalculatePoints(forest) {
        this.points = this.count * forest.horseChestnutCount * 3
    }
}

export const roeDeerLinden = {
    name: 'roeDeerLinden',
    position: 'side',
    symbols: ['deer', 'clovenHoofedAnimal'],
    recalculatePoints(forest) {
        this.points = this.count * forest.lindenCount * 3
    }
}

export const roeDeerSilverFir = {
    name: 'roeDeerSilverFir',
    position: 'side',
    symbols: ['deer', 'clovenHoofedAnimal'],
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

export const wildBoar = {
    name: 'wildBoar',
    position: 'side',
    symbols: ['clovenHoofedAnimal'],
    recalculatePoints(forest) {
        if(forest.countByName('squeaker') > 0)
            this.points = this.count * 10
        else
            this.points = 0
    }
}

export const allDeersInBaseGame = [fallowDeer, redDeer, roeDeerBeech, roeDeerLinden, roeDeerSilverFir, roeDeerHorseChestnut, roeDeerBirch, squeaker, wildBoar]