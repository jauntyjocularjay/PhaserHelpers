/**
 * @class Squad and all sub-classes are a work in progress
 * @todo work in progress
 */
import {
    Player,
    Enum,
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
        // this.spriteSheet
        // this.sprite
        // this.get('') from EasyAccessors
        // this.set('property',value) from EasyAccessors
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

class Role extends Enum {
    constructor(roles) {
        super(roles)
    }
}

export {
    Squad,
    Role,
    SquadMember
}