import GetData from './GetData'
import { updateGameData } from './DataHelper/Restore'

const client_test = false;
const TEST = true

function UpdateData(getData) {
    if(client_test){
        return;
    }

    // console.log(`${getData} socket on !!!`)

    let socket = GetData("socket");
    socket.on(getData, (data) => {
        if(TEST){
            data.user.push({r: [250, 250], room: "25", kind: "x", name: null, vel: [0, 0]})
        }
        updateGameData["data"] = data;

    });
}

export default UpdateData
