/** 
 * @file is a boilerplate for starting. Copy to your root.
 * @boilerplate 
*/
import {
    EasyAccessor,
    Config,
    View,
    Player,
    Position,
    Score,
    Spread,
    Typeface,
    Frame,
    SquareFrame,
    Img,
    SpriteSheet,
} from './PhaserHelpers/index.mjs'


const game = new Phaser.Game(config(VIEW, PHYSICS))
const VIEW = new View(800,600)
const PHYSICS = {
    default: 'You can use a PhaserHelpers/Platformer/PHYSICS or choose your own',
    params: { // Params include 'arcade' and more, see documentation for more
        gravity: { y: 0, x: 0 },
        debug: false
    }
}

function config(VIEW, PHYSICS){
    const config = new Config(VIEW, PHYSICS)
    
    config['scene'] = {
        preload: preload,
        create: create,
        update: update
    }

    return config
}

function preload (){
}

function create (){
}

function update (){
}


