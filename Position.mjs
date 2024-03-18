import { EA } from './Constants.mjs'

class Position extends EA {
    constructor(x,y){
        super()
        this.x = x
        this.y = y
    }
}

export { Position }