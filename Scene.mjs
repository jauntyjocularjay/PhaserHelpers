import { EA } from '../Constants.mjs'

class Scene {
    constructor(preload, create, update)
    {
        this.preload = preload
        this.create = create
        this.update = update
    }
}

export {
    Scene
}