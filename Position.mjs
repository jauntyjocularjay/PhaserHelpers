import { EA } from './Constants.mjs'

class Position extends EA {
    constructor(x,y){
        super()
        this.x = x
        this.y = y
    }
}

class Spread extends Position {
    constructor(x,y=0,stepX=0, stepY=0){
        super(x,y)
        this.stepX = stepX
        this.stepY = stepY
    }

    transform(){
        return {
            x: this.x,
            y: this.y,
            stepX: this.stepX,
            stepY: this.stepY
        }
    }
}

export {
    Position,
    Spread
}