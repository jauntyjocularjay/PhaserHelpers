import { EA } from '../Constants.mjs'

class Platform extends EA {
    constructor(img) {
        super()
        this.img = img
        this.physicsGroup = null
    }

    preload(activeScene) {
        this.get('img').preload(activeScene)
    }

    create(activeScene) {
        this.physicsGroup = activeScene.physics.add.staticGroup()
    }

    update(activeScene) {
    }
}

export { Platform }