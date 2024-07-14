import { EasyAccessor } from './index.mjs'


/**
 * @note
 *     Use this class by setting the with view, physics and add the scene with EasyAccessor.
 *     No idea why passing it as an argument doesn't work. 
 */
class Config extends EasyAccessor {
    constructor(view, physics=null, scene=null){
        /**
         * @param {object} scene doesn't work when passed as an argument
         */
        super()
        this.type = Phaser.AUTO
        this.width = view.width
        this.height = view.height
        this.physics = physics
        this.scene = {
            preload: null,
            create: null,
            update: null
        }
    }
}

export { Config }