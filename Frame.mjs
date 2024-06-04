import { EasyAccessor } from './index.mjs'

class Frame extends EasyAccessor {
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