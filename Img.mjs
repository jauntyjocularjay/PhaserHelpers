import {
    Player,
    EasyAccessor
} from './index.mjs'

class Img extends EasyAccessor {
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

    preload(activeScene)  // pass 'this' as the argument
    /**
     * @method preload
     * @param activeScene is 'this' from the main Game.mjs or Index.mjs file
     */
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
    }

    preload(activeScene)
    {
        activeScene.load.spritesheet(this.alias, this.path, this.frame)
    }

    update(activeScene)
    {
        
    }
}

export { 
    Img,
    SpriteSheet
}