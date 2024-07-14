import { Platform } from './Platform.mjs'
import { PlatformerPlayer } from './PlatformerPlayer.mjs'
import {
    input,
    cursors
} from './Input.mjs'

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
    input,
    cursors
}