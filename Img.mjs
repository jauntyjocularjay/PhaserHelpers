class Img {
    constructor(alias, path)
    {
        this.alias = alias
        this.path = path
    }

    preload(index)
    {
        index.load.image(this.alias, this.path)
    }

    create(index, posX=0, posY=0)
    {
        index.add.image(posX, posY, this.alias)
    }

    update(index)
    {

    }
}

class SpriteSheet extends Img {
    constructor(alias, path, frame){
        super(alias, path)
        this.frame = frame
    }

    preload(index)
    {
        index.load.spritesheet(this.alias, this.path, this.frame)
    }

    create(index)
    {
        index.add.spritesheet()
    }

    update(index)
    {
        
    }
}

export { 
    Img,
    SpriteSheet
}