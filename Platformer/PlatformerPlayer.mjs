import { Player } from '../Constants.mjs'

class PlatformerPlayer extends Player {
    constructor(spriteSheet) {
        super(spriteSheet)
        this.cursors = null
        this.physics = null
        this.bounce = 0.2
        this.collideWorldBounds = true
        this.physicsGroup = null
        this.velocity = {
            x: 160,
            y: -330,
        }
    }

    preload(activeScene) {
        this.spriteSheet.preload(activeScene)
    }

    create(activeScene, playerSprite) {
        playerSprite = activeScene.physics.add.sprite(100, 450, 'dude')
        this.set('physicsGroup', playerSprite)
        playerSprite.setBounce(0.2)
        playerSprite.setCollideWorldBounds(true)
        this.loadAnimations(activeScene)
    }

    loadAnimations(activeScene) {
        activeScene.anims.create({
            key: 'left',
            frames: activeScene.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        })

        activeScene.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20
        })

        activeScene.anims.create({
            key: 'right',
            frames: activeScene.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        })
    }

    update(cursors) {
        const velocity = this.get('velocity')
        if (cursors.left.isDown)
        {
            this.get('physicsGroup').setVelocityX(-velocity.x);
            this.get('physicsGroup').anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            this.get('physicsGroup').setVelocityX(velocity.x);
            this.get('physicsGroup').anims.play('right', true);
        }
        else
        {
            this.get('physicsGroup').setVelocityX(0);
            this.get('physicsGroup').anims.play('turn');
        }

        if (cursors.up.isDown && this.get('physicsGroup').body.touching.down)
        {
            this.get('physicsGroup').setVelocityY(velocity.y);
        }
    }
}

export { PlatformerPlayer }