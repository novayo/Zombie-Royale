// import Collision from '../Collision/Collision'
// import { originUser } from '../../Init/InitUser'

// export var data = {
//     user: [],
//     wall: []
// }

export var keyboard = {
    keyup: {"z": true, "x": true, "w": true},
    keydown: {"ArrowUp": true, "ArrowDown": true, "ArrowLeft": true, "ArrowRight": true}
}

export const Keyboard = (kind, key) => {
    switch (kind) {
        case "keyup":
          return keyboard.keyup[key];
        case "keydown":
          return keyboard.keydown[key];
        default:
          return null;
      }
}

export const Move = (key, speed) => {

    switch (key) {
        case "ArrowUp":
            return [0, -speed];
        case "ArrowDown":
            return [0, speed];
        case "ArrowLeft":
            return [-speed, 0];
        case "ArrowRight":
            return [speed, 0];
        default:
            return [0, 0];
      }
    
}

// export const keyboardEvent = () => {
//     window.addEventListener('keydown', function(event){
//         if(Keyboard('keydown', event.key)){
//             var move = Move(event.key, 5);
//             var collision = Collision(originUser.myUser.r, move, data.user, data.wall, 12, 20, 100, {left: [0, 500], top: [0, 500]});
//             if(collision.move !== undefined){
//                 move = collision.move;
//             }
//             if(collision.event){
//                 originUser.myUser.r =  [originUser.myUser.r[0] + move[0], originUser.myUser.r[1] + move[1]];
//                 sendDataToServer({r: originUser.myUser.r, kind: "move", name: GetData("name"), room: GetData("room")});
//             }

//         }
//     });

//     window.addEventListener('keyup', function(event){
//         if(Keyboard('keyup', event.key)){
//             sendDataToServer({r: [Math.floor(Math.random() * 500), Math.floor(Math.random() * 500)], kind: event.key, name: GetData("name"), room: GetData("room")});
//         }
//     });
// }