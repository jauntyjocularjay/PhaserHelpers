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
        this.setSprite(scene.physics.add.sprite(view.centerX(), view.centerY(), this.spriteSheet.alias))
        this.setSprite(this.getSprite().setBounce(bounce))
        this.setSprite(this.getSprite().setCollideWorldBounds(collideWorldBounds))
        this.setCursors(scene.input.keyboard.createCursorKeys())

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
    }

    update()
    {
        
        if (this.getCursors().left.isDown)
        {
            this.getSprite().setVelocityX(-160);
            this.getSprite().anims.play('left', true);
        }
        else if (this.getCursors().right.isDown)
        {
            this.getSprite().setVelocityX(160);
            this.getSprite().anims.play('right', true);
        }
        else
        {
            this.getSprite().setVelocityX(0);
            this.getSprite().anims.play('turn');
        }

        if (this.getCursors().up.isDown && this.getSprite().body.touching.down)
        {
            this.getSprite().setVelocityY(-330);
        }
    }
}

export { Player }