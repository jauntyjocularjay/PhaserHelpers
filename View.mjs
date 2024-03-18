import { 
    EA,
    Position
} from './Constants.mjs'

class View extends EA {
    constructor(width, height)
    {
        super()
        this.width = width
        this.height = height
    }

    center()
    {
        return new Position(this.width / 2, this.height / 2)
    }
}

export { View }