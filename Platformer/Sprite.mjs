class SpriteSheet {
    constructor(aliasStr, frame, pngStr){
        this.alias = aliasStr
        this.frame = frame
        this.png = pngStr
    }
}

function loadSpriteSheet(index, spriteSheet) {
    index.load.spritesheet(
        spriteSheet.alias,
        spriteSheet.png,
        spriteSheet.frame
    )
}

export {
    SpriteSheet,
    loadSpriteSheet
}