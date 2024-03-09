import { Config } from './Config.mjs'
import { Scene } from './Scene.mjs'
import { View } from './View.mjs'
import {
    Frame,
    SquareFrame
} from './Frame.mjs'
import { 
    Img,
    SpriteSheet
} from './Img.mjs'

const root = '../../'

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
    Frame,
    SquareFrame,
    Img,
    SpriteSheet,
    root,
    physics
}