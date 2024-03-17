import { EA } from './Constants.mjs'

class Scene extends EA {
    constructor(preload, create, update)
    {
        super()
        this.preload = preload
        this.create = create
        this.update = update
    }
}

export {
    Scene
}