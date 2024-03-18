import {
    Position,
    Typeface
} from "./Constants.mjs"

class Score {
    constructor(prefix='score: ', value=0, increment=1, typeface=new Typeface(16, '#000'),position=new Position(0,0)) {
        this.prefix = prefix
        this.value = 0
        this.increment = increment
        this.typeface = typeface
        this.position = position
    }

    create(activeScene){
        const typeface = this.typeface.transform()
        activeScene.add.text(this.position.x, this.position.y, this.prefix + this.value, this.typeface.transform())
    }

    increment(){
        this.value += this.increment
    }
}

export { Score }