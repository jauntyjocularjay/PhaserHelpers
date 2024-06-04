import { EasyAccessor } from './index.mjs'

class Player extends EasyAccessor {
    constructor(spriteSheet)
    {
        super()
        this.spriteSheet = spriteSheet
        this.sprite = null
    }

    preload(activeScene)
    {
        this.spriteSheet.preload(activeScene)
    }

    create()
    {
        
    }

    update()
    {

    }
}

export { Player }