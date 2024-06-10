import { EasyAccessor } from './ea/EasyAccessor.mjs'
import { Config } from './Config.mjs'
import { Score } from './Score.mjs'
import { View } from './View.mjs'
import { Player } from './Player.mjs'
import {
    Position,
    Spread
} from './Position.mjs'
import { Typeface } from './Typeface.mjs'
import {
    Frame,
    SquareFrame
} from './Frame.mjs'
import { 
    Img,
    SpriteSheet
} from './Img.mjs'

const PHYSICS = {
    arcade: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 16,
                x: 0
            },
            momentum: 0,
            debug: false
        }
    },
    platformer: {
        default: 'arcade',
        arcade: {
            gravity: { y: 256 },
            debug: false
        }
    },
}

export {
    EasyAccessor,
    Config,
    View,
    PHYSICS,
    Player,
    Position,
    Score,
    Spread,
    Typeface,
    Frame,
    SquareFrame,
    Img,
    SpriteSheet,
}