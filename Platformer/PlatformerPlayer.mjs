import { Player } from '../Constants.mjs'

const bounce = 0.2
const collideWorldBounds = true

class PlatformerPlayer extends Player {
    constructor(spriteSheet)
    {
        super(spriteSheet)
        this.cursors = null
    }

    preload(activeScene)
    {
        this.spriteSheet.preload(activeScene)
    }

    create(view, activeScene)
    {
        this.set('sprite', activeScene.physics.add.sprite(view.centerX(), view.centerY(), this.spriteSheet.alias))
        this.setSprite(this.get('sprite').setBounce(bounce))
        this.setSprite(this.get('sprite').setCollideWorldBounds(collideWorldBounds))
        this.setCursors(activeScene.input.keyboard.createCursorKeys())

        activeScene.anims.create({
            key: 'left',
            frames: activeScene.anims.generateFrameNumbers('dude', {start: 0, end: 3}),
            frameRate: 10,
            repeat: -1
        })

        activeScene.anims.create({
            key: 'turn',
            frames: [{key: 'dude', frame: 4}],
            frameRate: 20
        })

        activeScene.anims.create({
            key: 'right',
            frames: activeScene.anims.generateFrameNumbers('dude', {start: 5, end: 8}),
            frameRate: 10,
            repeat: -1
        })
    }

    update()
    {
        
        if (this.getCursors().left.isDown)
        {
            this.get('sprite').setVelocityX(-160);
            this.get('sprite').anims.play('left', true);
        }
        else if (this.getCursors().right.isDown)
        {
            this.get('sprite').setVelocityX(160);
            this.get('sprite').anims.play('right', true);
        }
        else
        {
            this.get('sprite').setVelocityX(0);
            this.get('sprite').anims.play('turn');
        }

        if (this.getCursors().up.isDown && this.get('sprite').body.touching.down)
        {
            this.get('sprite').setVelocityY(-330);
        }
    }
}

export { PlatformerPlayer }