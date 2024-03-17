import { default as EA } from './lib/ea/EasyAccessor.mjs'
import { Config } from './Config.mjs'
import { Scene } from './Scene.mjs'
import { View } from './View.mjs'
import { Player } from './Player.mjs'
import {
    Squad,
    Role, 
    SquadMember
} from './TBStrategy/Squad.mjs'
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
    EA,
    Config,
    Scene,
    View,
    Player,
    Squad,
    Role,
    SquadMember,
    Frame,
    SquareFrame,
    Img,
    Platform,
    SpriteSheet,
    physics
}