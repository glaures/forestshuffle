export const redSquirrel = {
    name: 'redSquirrel',
    position: 'top',
    symbols: ['pawedAnimal'],
    params: [{
        name: 'redSquirrelsAtopAnOak',
        type: 'number',
        value: 0
    }],
    recalculatePoints(forest) {
        this.points = this.params[0].value * 5
    }
}

export const allOtherTopInBaseGame = [redSquirrel]

