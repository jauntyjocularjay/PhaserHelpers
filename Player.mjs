import { EA } from './Constants.mjs'

class Player extends EA {
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