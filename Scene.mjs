// import { EA } from './Constants.mjs'

// /**
//  * @summary
//  *      this appears to be a problematic class
//  *      phaser will not load with it
//  */

// class Scene extends EA {
//     constructor(p, c, u)
//     {
//         super()
//         this.p = p
//         this.c = c
//         this.u = u
//     }

//     preload(activeScene) {
//         this.p(activeScene)
//     }

//     create(activeScene) {
//         this.c(activeScene)
//     }

//     update(activeScene) {
//         this.u(activeScene)
//     }

//     transform(activeScene){
//         return {
//             preload: this.p(activeScene),
//             create: this.c(activeScene),
//             update: this.u(activeScene)
//         }
//     }
// }

// export {
//     Scene
// }