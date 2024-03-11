import { Player } from './Constants.mjs'

class Img {
    constructor(alias, path, func=null)
    {
        this.alias = alias
        this.path = path
        this.func = func
    }

    preload(scene)
    {
        scene.load.image(this.alias, this.path)
    }

    create(scene, posX=0, posY=0)
    {
        scene.add.image(posX, posY, this.alias)
        if(this.func){this.func()}
    }

    update(scene)
    {

    }
}

class SpriteSheet extends Img {
    constructor(alias, path, frame){
        super(alias, path)
        this.frame = frame
    }

    preload(scene)
    {
        scene.load.spritesheet(this.alias, this.path, this.frame)
    }

    create(posX, posY, scene)
    {
    }

    update(scene)
    {
        
    }
}

export { 
    Img,
    SpriteSheet
}