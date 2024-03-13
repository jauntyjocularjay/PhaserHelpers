import { Player } from '../Constants.mjs'



class Squad {
    constructor()
    {
        this.member1
        this.member2
        this.member3
        this.member4
    }
}

class SquadMember extends Player {
    constructor(spriteSheet)
    {
        super(spriteSheet)
            // this.spriteSheet
            // this.sprite
            // this.cursor
        this.alias = ''
        this.role = null
        this.animation = {}
        this.abilities = {}
        /**
         * @summary
         * 1 Health Pts ~ 4 Action Pts
         */
        this.action = 0
        this.health = 0
    }
}

class Role extends Enum {
    constructor(roles){
        super(roles);
    }
}

export { 
    Squad,
    Role,
    SquadMember
}