import { GetData } from '../../Data/GetData'
import { HotData } from '../../Data/HotData'

export var originUser = {
    allUser: [],
    myUser: '0000000000000-'
}


export async function InitUser(getDataFromServer, sendDataToServer) {
    // const size = GetData("map");
    const size = 500;

    const user = {
        '_id': GetData('_id'),
        'r': [Math.floor(Math.random() * size), Math.floor(Math.random() * size)],
        'kind': "z",
        'name': GetData("name"),
        'room': GetData("room")
    }
    // let val = await HotData("setUser", "getUser", user)
    // console.log('設定使用者資料', GetData('data'))
    // console.log('取得所有使用者資料', val)
    originUser = { allUser: [user], myUser: user }
    getDataFromServer();
    sendDataToServer(originUser.myUser);

    // const user = {
    //     r: [Math.floor(Math.random() * size), Math.floor(Math.random() * size)],
    //     kind: "z",
    //     name: GetData("name"),
    //     room: GetData("room")
    // }
    // return {allUser: [user], myUser: user};

    // console.log('=========== user: ', user)

    // originUser.allUser = [user];
    // originUser.myUser = user;

}
