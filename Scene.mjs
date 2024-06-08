import { EasyAccessor } from './index.mjs'

/**
 * @summary
 *      this appears to be a problematic class
 *      phaser will not load with it
 */

class Scene extends EasyAccessor {
    constructor(p, c, u)
    {
        super()
        this.p = p
        this.c = c
        this.u = u
    }

    preload() {
        this.p
    }

    create() {
        this.c
    }

    update() {
        this.u
    }

    transform(){
        return {
            preload: this.p,
            create: this.c,
            update: this.u
        }
    }
}

export {
    // Scene
}