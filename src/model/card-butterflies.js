const pointsForSetCount = [0, 0, 3, 6, 12, 20, 35, 55]

export function calculateButterflyPoints(forest) {
    let butterflies = forest.cards
        .filter(c => c.symbols.indexOf('butterfly') >= 0 && c.count > 0)
        .map(c => c.count)
    let points = 0
    while (butterflies.length > 0) {
        points += pointsForSetCount[butterflies.length]
        butterflies = butterflies
            .map(b => b - 1)
            .filter(b => b > 0)
    }
    return points
}

export const camberwellBeauty = {
    name: 'camberwellBeauty',
    position: 'top',
    symbols: ['butterfly', 'insect'],
    recalculatePoints(forest) {
    }
}

export const peacockButterfly = {
    name: 'peacockButterfly',
    position: 'top',
    symbols: ['butterfly', 'insect'],
    recalculatePoints(forest) {
    }
}

export const silverWashedFritillary = {
    name: 'silverWashedFritillary',
    position: 'top',
    symbols: ['butterfly', 'insect'],
    recalculatePoints(forest) {
    }
}

export const purpleEmperor = {
    name: 'purpleEmperor',
    position: 'top',
    symbols: ['butterfly', 'insect'],
    recalculatePoints(forest) {
    }
}

export const largeTortoiseshell = {
    name: 'largeTortoiseshell',
    position: 'top',
    symbols: ['butterfly', 'insect'],
    recalculatePoints(forest) {
    }
}

export const phoebusApollo = {
    name: 'phoebusApollo',
    position: 'top',
    symbols: ['butterfly', 'insect', 'alps'],
    recalculatePoints(forest) {
    }
}

export const mapButterfly = {
    name: 'mapButterfly',
    position: 'top',
    symbols: ['butterfly', 'insect', 'woodlandEdge'],
    recalculatePoints(forest) {
    }
}

export const allButterflies = [camberwellBeauty, peacockButterfly, silverWashedFritillary, purpleEmperor, largeTortoiseshell, phoebusApollo, mapButterfly]
