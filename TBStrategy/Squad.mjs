/**
 * @class Squad and all sub-classes are a work in progress
 * @todo work in progress
 */
import {
    Player,
    EasyAccessor
} from '../index.mjs'



class Squad extends EasyAccessor {
    constructor() {
        super()
        this.member1
        this.member2
        this.member3
        this.member4
    }
}

class SquadMember extends Player {
    constructor(spriteSheet) {
        super(spriteSheet)
        this.alias = ''
        this.role = null
        this.animation = {}
        this.abilities = {}
        this.action = 0
        this.attack = 0
        this.defend = 0
        this.get = (property) => {
            return this[property]
        }
        this.set = (property, value) => {
            this[property] = value
        }
    }
}

export {
    Squad,
    SquadMember
}