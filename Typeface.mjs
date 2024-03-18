import { EA } from './Constants.mjs'

class Typeface extends EA {
    static red = '#f00'
    static orange = '#ffa500'
    static yellow = '#ff0'
    static green = '#0f0'
    static cyan = '#0ff'
    static blue = '#00f'
    static magenta = '#f0f'
    static purple = '#800080'
    static white = '#fff'
    static black = '#000'
    static gray = '#808080'
    static darkGray = '#404040'
    static lightGray = '#c0c0c0'
    static px = 'px'
    static em = 'em'

    constructor(size, fillStr){
        super()
        this.size = size
        this.fill = fillStr
        this.unit = Typeface.px
    }

    transform(){
        return {fontSize: `${this.size+this.unit}`, fill: this.fill}
    }
}

export { Typeface }