import { EA } from '../Constants.mjs'

class Platform extends EA {
    constructor(img)
    {
        this.img = img
        this.physicsGroup = null
    }

    preload(activeScene)
    {
        this.getImg().preload(activeScene)
    }

    create(activeScene)
    {
        
    }

    update(activeScene)
    {

    }

    level1(activeScene)
    {
        const physicsGroup = this.get('physicsGroup')

        physicsGroup.create(400, 568, 'ground').setScale(2).refreshBody()
    }

}

export { Platform }