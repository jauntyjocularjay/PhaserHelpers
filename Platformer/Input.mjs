const cursors = {
    wasd: this.input.keyboard.createCursorKeys(),
    dir: this.input.keyboard.createCursorKeys()
}

cursors.wasd.up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
cursors.wasd.down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
cursors.wasd.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
cursors.wasd.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
cursors.wasd.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E)
cursors.wasd.shift = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT)


function input(player, cursors) {
    if (cursors.left.isDown) {
        player.setVelocityX(-160)

        player.anims.play('left', true)
    }
    else if (cursors.right.isDown) {
        player.setVelocityX(160)

        player.anims.play('right', true)
    }
    else {
        player.setVelocityX(0)

        player.anims.play('idle')
    }

    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330)
    }
}

export {
    input,
    cursors
}
