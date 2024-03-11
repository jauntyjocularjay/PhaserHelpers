class View {
    constructor(width, height)
    {
        this.width = width
        this.getWidth = () => {return this.width}
        this.setWidth = (w) => {this.width = w}
        this.centerX = () => {return this.getWidth()/2}
        this.height = height
        this.getHeight = () => {return this.height}
        this.setHeight = (h) => {this.height = h}
        this.centerY = () => {return this.getHeight()/2}
    }

}

export { View }