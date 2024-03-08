import {
    Frame,
    SquareFrame
} from './Platformer/Frame.mjs'

import {
    Map,
    SquareMap
} from './Platformer/Map.mjs'

import {
    SpriteSheet,
    loadSpriteSheet
} from './Platformer/Sprite.mjs'

import {
    EnvironmentImage,
    EnvironmentTileset,
    Environment
} from './Platformer/Environment.mjs'

import {
    VIEW
} from './Constants.mjs'


const config = {
    type: Phaser.AUTO,
    width: VIEW.width,
    height: VIEW.height,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

/*** Preload Functions ***/
function preloadEnvironment(environment)
{
    const bg = environment.background
    const layers = environment.layers
    const decor = environment.decor
    const props = environment.props
    let i = 1

    if(bg)
    {
        this.load.image('background', bg.path)
    }
    if(decor)
    {
        this.load.spritesheet(
            decor.alias,
            decor.path,
            decor.frame)
    }
    if(props)
    {
        this.load.spritesheet(
            props.alias,
            props.path,
            props.frame)
    }
    layers.forEach( layer => {
        this.load.image(`layer${i+1}`, layer.path)
        i++
    })
}

function preloadSpriteSheet(index, spritesheet)
{
    index.load.spritesheet(spritesheet.alias, spritesheet.png, spritesheet.frame)
}

/*** Create Functions ***/
function createEnvironment(environment)
{
    const bg = environment.background
    const decor = environment.decor
    const props = environment.props

    if(bg){this.add.image(bg.width, bg.height, bg.alias)}
    if(decor){this.addTileset(decor.alias, decor.path, decor.frame)}
    if(props){this.addTileset(props.alias, props.path, props.frame)}
    environment.layers.forEach(layer => {
        this.add.image(layer.width, layer.height, layer.alias)
    })
}

function createCharacterIdle(idle)
{

}

export {
    Frame,
    SquareFrame,
    Map,
    SquareMap,
    CharacterState,
    EnvironmentImage,
    EnvironmentTileset,
    Environment,
    preloadEnvironment as loadEnvironment,
    preloadSpriteSheet as loadCharacterIdle,
    createEnvironment as addEnvironment,
    VIEW,
    config
}