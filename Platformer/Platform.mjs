class Platform {
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

    getImg()
    {
        return this.img
    }
    
    setImg(img)
    {
        this.img = img
    }

    getPhysicsGroup()
    {
        return this.physicsGroup
    }

    setPhysicsGroup(staticGroup)
    {
        this.physicsGroup = staticGroup
    }

    level1(activeScene)
    {
        const physicsGroup = this.getPhysicsGroup()
        physicsGroup.create(400, 568, 'ground').setScale(2).refreshBody()
    }

}

export { Platform }