import { EA } from './index.mjs'

class Config extends EA {
    constructor(view, physics, scene=null)
    {
        super()
        this.type = Phaser.AUTO,
        this.width = view.width,
        this.height = view.height,
        this.physics = physics,
        this.scene = scene
    }
}

export { Config }