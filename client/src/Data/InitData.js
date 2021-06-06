import io from 'socket.io-client';
import { URL, user, map, update } from './Restore'

// let socket = io(URL);

export function InitData(name, passward) {
    // socket.emit("SetRoom", {username: name, passward: passward})
    // socket.on("getRoom", (data) => {
    //     user.Room = data.room;
    //     map.size = data.map.size // 需討論 若造自動分配地圖就和Room綁再一起
    //     map.kind = data.map.kind // 需討論
    //     map.data = data.map.data // 需討論
    //     socket.disconnect();
    // })
    user.name = name;
    update.state = true;

}
