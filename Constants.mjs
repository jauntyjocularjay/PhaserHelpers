import { Config } from './Config.mjs'
import { Scene } from './Scene.mjs'
import { View } from './View.mjs'
import { Player } from './Platformer/Player.mjs'
import { Platform } from './Platformer/Platform.mjs'
import {
    Frame,
    SquareFrame
} from './Frame.mjs'
import { 
    Img,
    SpriteSheet
} from './Img.mjs'

const physics = {
    platformer: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    }
}

export {
    Config,
    Scene,
    View,
    Player,
    Frame,
    SquareFrame,
    Img,
    Platform,
    SpriteSheet,
    physics
}