import {
    Frame,
    SquareFrame
} from './Frame.mjs'

import {
    Map,
    SquareMap
} from './Map.mjs'

function loadEnvironment(environment)
{
    let i = 1
    this.load.image('background', environment.background.path)
    environment.layers.forEach( layer => {
        this.load.image(`layer${i}`, layer.path)
        i++
    })
    this.load.spritesheet(
        environment.tileset.alias,
        environment.tileset.path,
        environment.tilset.frame
    )
    this.load.spritesheet(
        environment.props.alias,
        environment.props.path,
        environment.props.frame
    )
}

function loadCharacter(character)
{
    this.load.spritesheet(character.idle.alias, character.idle.png, character.idle.frame)
}

export {
    Frame,
    SquareFrame,
    Map,
    SquareMap,
    loadEnvironment,
    loadCharacter
}