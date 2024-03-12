class Platform {
    constructor(img)
    {
        this.img = img
    }

    preload(scene)
    {
        this.getImg().preload(scene)
    }

    create(scene)
    {

    }

    update(scene)
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
}

export { Platform }