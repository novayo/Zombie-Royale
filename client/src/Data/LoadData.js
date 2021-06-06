import { GetData } from './GetData'
import { user, update } from './Restore'
import io from 'socket.io-client';
import { URL } from './Restore'

// let socket = io(URL);

export function LoadData() {
    if(GetData("name") != null){
        return;
    }

    // socket.emit("getUser", null);
    // socket.on("retUser", (data) => {
    //     user.name = data.username;
    //     user.Room = data.room;
    //     // And Get name、map by Server
    //     socket.disconnect();
    // })


    update.state = true;

}

