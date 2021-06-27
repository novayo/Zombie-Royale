import GetData from './GetData'
import { updateGameData } from './DataHelper/Restore'

const client_test = false;

// 測試使用
function PushData(newData){
    if(newData.kind === "Bullet"){ // 先暫時鎖住
        updateGameData.data.bullet.push(newData)

    } else {
        var flag = true;
        if(newData.kind === "z"){
            for(let i = 0; i < updateGameData.data.user.length; i++){
                if(updateGameData.data.user[i].kind === "z" && updateGameData.data.user[i].name === newData.name){
                    updateGameData.data.user[i].r = newData.r
                    updateGameData.data.user[i].vel = newData.vel
                    flag = false
                }
            }
        }
        if(flag){
            updateGameData.data.user.push(newData)
        }

    }

}


function SendData(setData, data) {
    data["_id"] = GetData("_id")

    if(client_test){
        PushData(data);
        return;
    }

    let socket = GetData("socket");
    socket.emit(setData, data);

}

export default SendData
