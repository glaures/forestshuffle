export const beech = {
    name: 'beech',
    type: 'beech',
    symbols: ['tree', 'beech'],
    recalculatePoints(forest) {
        const count = this.count
        const violetCarpenterBee = forest.cards.find(c => c.name === 'violetCarpenterBee')
        const addCount = violetCarpenterBee.params[0].value
        if (count + addCount >= 4)
            this.points = count * 5
        else
            this.points = 0
    }
}

export const birch = {
    name: 'birch',
    type: 'birch',
    symbols: ['tree', 'birch'],
    recalculatePoints(forest) {
        this.points = this.count
    }
}

export const douglasFir = {
    name: 'douglasFir',
    type: 'douglasFir',
    symbols: ['tree', 'douglasFir'],
    recalculatePoints(forest) {
        this.points = this.count * 5
    }
}

export const horseChestnut = {
    name: 'horseChestnut',
    type: 'horseChestnut',
    symbols: ['tree', 'horseChestnut'],
    recalculatePoints(forest) {
        const violetCarpenterBee = forest.cards.find(c => c.name === 'violetCarpenterBee')
        const count = this.count + violetCarpenterBee.params[1].value
        this.points = Math.min(count * count, 49)
    }
}

export const linden = {
    name: 'linden',
    type: 'linden',
    symbols: ['tree', 'linden'],
    params: [
        {
            name: 'hasMostLindens',
            type: 'boolean',
            distributed: true,
            value: false
        }
    ],
    recalculatePoints(forest) {
        const hasMostLindens = forest.distributedScoring ? this.params[0].value : forest.hasMostOfName("linden")
        this.points = this.count * (hasMostLindens ? 3 : 1)
    }
}

export const oak = {
    name: 'oak',
    type: 'oak',
    symbols: ['tree', 'oak'],
    recalculatePoints(forest) {
        const differentTreeTypes = forest.cards.filter(c => c.symbols.indexOf('tree') >= 0 && c.name !== 'treeSaplings' && c.count > 0).length
        if (differentTreeTypes >= 8)
            this.points = this.count * 10
        else this.points = 0
    }
}

export const silverFir = {
    name: 'silverFir',
    type: 'silverFir',
    symbols: ['tree', 'silverFir'],
    params: [{
        name: 'cardsAttachedToSilverFirs',
        type: 'number',
        value: 0,
        unrestricted: true
    }],
    recalculatePoints(forest) {
        this.points = this.params[0].value * 2
    }
}

export const sycamore = {
    name: 'sycamore',
    type: 'sycamore',
    symbols: ['tree', 'sycamore'],
    recalculatePoints(forest) {
        this.points = forest.countByName('sycamore') * forest.countBySymbol('tree')
    }
}

export const treeSaplings = {
    name: 'treeSaplings',
    type: 'none',
    symbols: ['tree'],
    recalculatePoints(forest) {
    }
}

export const europeanLarch = {
    name: 'europeanLarch',
    type: 'alpineLarch',
    symbols: ['tree', 'europeanLarch', 'alps'],
    recalculatePoints(forest) {
        this.points = this.count * 3
    }
}

export const stonePine = {
    name: 'stonePine',
    type: 'stonePine',
    symbols: ['tree', 'stonePine', 'alps'],
    recalculatePoints(forest) {
        this.points = this.count * forest.countBySymbol('alps')
    }
}

export const downyBirch = {
    name: 'downyBirch',
    symbols: ['tree'],
    hide: (gameStore) => !gameStore.hobbyPromo,
    recalculatePoints(forest) {
        this.points = this.count
    }
}

export const allTrees = [beech, birch, douglasFir, horseChestnut, linden, oak, silverFir, sycamore, europeanLarch, stonePine, treeSaplings, downyBirch]






