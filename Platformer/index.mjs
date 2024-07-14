import { Platform } from './Platform.mjs'
import { PlatformerPlayer } from './PlatformerPlayer.mjs'
import { Input } from './Input.mjs'

const PHYSICS = {
    default: 'arcade',
    arcade: {
        gravity: { y: 256 },
        debug: false
    }
}

export {
    Platform,
    PlatformerPlayer,
    PHYSICS,
    Input
}