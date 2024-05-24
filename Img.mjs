import {
    Player,
    EA
} from './index.mjs'

class Img extends EA {
    static png = '.png'
    static jpg = '.jpg'
    static gif = '.gif'
    static jpeg = '.jpeg'
    static bmp = '.bmp'
    static webp = '.webp'
    static svg = '.svg'

    constructor(alias, path)
    {
        super()
        this.alias = alias
        this.path = path
    }

    preload(activeScene)
    {
        activeScene.load.image(this.alias, this.path)
    }

    create(activeScene, posX=0, posY=0)
    {
        // console.log('Img.create() entered')
        activeScene.add.image(posX, posY, this.alias)
    }

    update(activeScene)
    {

    }
}

class SpriteSheet extends Img {
    constructor(alias, path, frame){
        super(alias, path)
        this.frame = frame
        // console.log('SpriteSheet.constructor() finished:\n', this)
    }

    preloadSheet(activeScene)
    {
        activeScene.load.spritesheet(this.alias, this.path, this.frame)
    }

    createImg()
    {
        super.create(activeScene, posX, posY)
    }

    create(activeScene, posX, posY)
    {
        activeScene.add.create(posX, posY, this.alias)
    }

    updateSheet(activeScene)
    {
        
    }
}

export { 
    Img,
    SpriteSheet
}