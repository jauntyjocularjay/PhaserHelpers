import { EA } from './Constants.mjs'

class View extends EA {
    constructor(width, height)
    {
        super()
        this.width = width
        this.centerX = () => {return this.get('width')/2}
        this.height = height
        this.centerY = () => {return this.get('height')/2}
    }

}

export { View }