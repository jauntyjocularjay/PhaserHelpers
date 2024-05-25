import { EasyAccessor } from '../index.mjs'

class Platform extends EasyAccessor {
    constructor(img) {
        super()
        this.alias = img.alias
        this.img = img
        this.physicsGroup = null
    }

    preload(activeScene) {
        this.get('img').preload(activeScene)
    }

    create(activeScene) {
        this.physicsGroup = activeScene.physics.add.staticGroup()
        this.physicsGroup.create(400, 568, this.alias).setScale(2).refreshBody()
        this.physicsGroup.create(600, 400, this.alias)
        this.physicsGroup.create(50, 250, this.alias)
        this.physicsGroup.create(750, 220, this.alias)
    }

    update(activeScene) {
    }
}

export { Platform }