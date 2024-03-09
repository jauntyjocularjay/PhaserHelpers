class Config
{
    constructor(view, physics, scene)
    {
        this.type = Phaser.AUTO,
        this.width = view.width,
        this.height = view.height,
        this.physics = physics,
        this.scene = scene
    }
}

export { Config }