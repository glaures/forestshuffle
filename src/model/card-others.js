export const redSquirrel = {
    name: 'redSquirrel',
    position: 'top',
    symbols: ['pawed'],
    param: {
        name: 'redSquirrelsAtopAnOak',
        type: 'number',
        value: 0
    },
    recalculatePoints(forest) {
        this.points = this.param.value * 5
    }
}

export const allOtherTopInBaseGame = [redSquirrel]

