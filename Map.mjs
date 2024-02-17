class Map {
    constructor( keyString, tileWidthInteger, tileHeightInteger){
        this.key = keyString,
        this.tileWidth = tileWidthInteger,
        this.tileHeight = tileHeightInteger
    }
}

class SquareTileMap extends Map {
    constructor(keyString, tilesideInteger){
        super(keyString, tilesideInteger, tilesideInteger)
    }
}

export {
    Map,
    SquareTileMap
}