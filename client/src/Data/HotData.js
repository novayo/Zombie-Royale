import io from 'socket.io-client';
import { URL, user } from './Restore'

let socket = io(URL);

// socket.on(getData, (data) => {
//     console.log(data)
//     user.data = data;
// })


// 非同步封包寫法
// export async function func() {
//     let a = await HotData(...)
//         .
// }

export function HotData(setData, getData, data) {

    return new Promise(function (resolve, reject) {

        socket.emit(setData, data);

        socket.once(getData, function (data) {
            resolve(data);
        });
    }).then((result) => {
        user.data = result;
        return user.data
    });


}


