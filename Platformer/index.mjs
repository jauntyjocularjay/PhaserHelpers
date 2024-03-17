import { Platform } from './Platform.mjs'
import { PlatformerPlayer } from './PlatformerPlayer.mjs'

const physics = {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 },
        debug: false
    }
}

export {
    Platform,
    PlatformerPlayer,
    physics
}