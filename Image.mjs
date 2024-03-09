class Image {
    constructor(alias, path)
    {
        this.alias = alias
        this.path = path
    }

    preload(index)
    {
        index.load.image(this.alias, this.path)
    }

    create(index, posX, posY)
    {
        index.add.image(posX, posY, this.alias)
    }

    update(index)
    {

    }
}

class SpriteSheet extends Image {
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
    Image,
    SpriteSheet
}