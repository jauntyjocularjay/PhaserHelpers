import { EA } from './Constants.mjs'

class Frame extends EA {
    constructor(width,height){
        super()
        this.frameWidth = width
        this.frameHeight = height
    }
}

class SquareFrame extends Frame {
    constructor(size){
        super(size,size)
    }
}

export {
    Frame,
    SquareFrame
}