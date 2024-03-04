
class EnvironmentImage
{
    constructor(path, width, height)
    {
        this.path = path
        this.width = width
        this.height = height
    }
}

class EnvironmentTileset
{
    constructor()
    {
        this.alias = alias
        this.path = path
        this.fram = frame
    }
}

class Environment
{
    constructor(background=null, decor=null, layers=[], props=null)
    {
        this.background = background
        this.decor = decor
        this.layers = layers
        this.props = props
    }
}

export {
    EnvironmentImage,
    EnvironmentTileset,
    Environment
}