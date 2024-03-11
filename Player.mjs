const bounce = 0.2
const collideWorldBounds = true

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
        this.setSprite(scene.physics.add.sprite(view.centerX(), view.centerY(), this.spriteSheet.alias), bounce, collideWorldBounds)

        scene.anims.create({
            key: 'left',
            frames: scene.anims.generateFrameNumbers('dude', {start: 0, end: 3}),
            frameRate: 10,
            repeat: -1
        })

        scene.anims.create({
            key: 'turn',
            frames: [{key: 'dude', frame: 4}],
            frameRate: 20
        })

        scene.anims.create({
            key: 'right',
            frames: scene.anims.generateFrameNumbers('dude', {start: 5, end: 8}),
            frameRate: 10,
            repeat: -1
        })

        // this.cursors = scene.input.keyboard.createCursorKeys()
    }

    update()
    {

    }
}

export { Player }