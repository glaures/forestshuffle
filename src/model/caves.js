export const batCave = {
    name: 'batCave',
    getPoints(forest){
        return forest.caveCount + (forest.countBySymbol('bat') * 3)
    }
}

export const collectorsCave = {
    name: 'collectorsCave',
    getPoints(forest){
        return forest.caveCount * 2
    }
}

export const supplyCave = {
    name: 'supplyCave',
    getPoints(forest){
        return forest.caveCount
    }
}

export const lonelyCave = {
    name: 'lonelyCave',
    getPoints(forest){
        return forest.caveCount === 0 ? 5 : forest.caveCount
    }
}

export const smugglersCave = {
    name: 'smugglersCave',
    getPoints(forest){
        return forest.caveCount
    }
}

export default [batCave, collectorsCave, lonelyCave, smugglersCave, supplyCave]
