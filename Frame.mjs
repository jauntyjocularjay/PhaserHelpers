class Frame {
    constructor(width,height){
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