class Player {
    constructor(spriteSheet)
    {
        this.spriteSheet = spriteSheet
        this.sprite = null
        this.setSprite = sprite => {this.sprite = sprite}
        this.getSprite = () => {return this.sprite}
        this.cursors = null
        this.setCursors = cursors => {this.cursors = cursors}
        this.getCursors = () => {return this.cursors}
    }

    preload(scene)
    {
        this.spriteSheet.preload(scene)
    }

    create(view, scene)
    {
        this.setSprite()
    }

    update()
    {

    }
}

export { Player }