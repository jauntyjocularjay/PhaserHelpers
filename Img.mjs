import {
    Player,
    EA
} from './Constants.mjs'

class Img extends EA {
    static png = '.png'
    static jpg = '.jpg'
    static gif = '.gif'
    static jpeg = '.jpeg'
    static bmp = '.bmp'
    static webp = '.webp'
    static svg = '.svg'

    constructor(alias, path, func=null)
    {
        super()
        this.alias = alias
        this.path = path
        this.func = func
    }

    preload(activeScene)
    {
        activeScene.load.image(this.alias, this.path)
    }

    create(activeScene, posX=0, posY=0)
    {
        activeScene.add.image(posX, posY, this.alias)
        if(this.func){this.func()}
    }

    update(activeScene)
    {

    }
}

class SpriteSheet extends Img {
    constructor(alias, path, frame){
        super(alias, path)
        this.frame = frame
    }

    preload(activeScene)
    {
        activeScene.load.spritesheet(this.alias, this.path, this.frame)
    }

    create(posX, posY, activeScene)
    {
    }

    update(activeScene)
    {
        
    }
}

export { 
    Img,
    SpriteSheet
}