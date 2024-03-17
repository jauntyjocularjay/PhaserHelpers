import {
    Config,
    View,
    Player,
    Frame,
    SquareFrame,
    Img,
    SpriteSheet,
} from '../Constants.mjs'
import {
    Platform,
    PlatformerPlayer,
    physics,
} from '../Platformer/index.mjs'


let activeScene
let platforms
let playerSprite
let cursors
const view = new View(800, 600)
const config = new Config(view, physics)
config.scene = {
    preload: preload,
    create: create,
    update: update,
}
const game = new Phaser.Game(config)
const assets = '../js/assets/'
const elements = {
    sky: new Img('ALIAS', assets + 'FILENAME'),
    star: new Img('ALIAS', assets + 'FILENAME'),
    platform: new Platform(new Img('ALIAS', assets + 'FILENAME')),
    player: new PlatformerPlayer(new SpriteSheet('ALIAS', assets + 'FILENAME', new Frame(WIDTH, HEIGHT))),
}

function preload() {
    activeScene = this
    for(let [key] of Object.entries(elements)){
        elements[key].preload(activeScene)
    }
}

function create() {
    const player = elements.player
    
    platform.create(activeScene)
    player.create(activeScene, playerSprite)

    activeScene.physics.add.collider(player.get('physicsGroup'), platform.get('physicsGroup'))
    cursors = this.input.keyboard.createCursorKeys()
}

function update() {
    const player = elements.player
    player.update(cursors)
}