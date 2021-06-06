import { GetData } from '../../Data/GetData'
// import { HotData } from '../../Data/HotData'

export var originUser = {
    allUser: [], 
    myUser: null
}

export function InitUser() {
    // const size = GetData("map");
    const size = 500;

    // const user = {r: [Math.floor(Math.random() * size), Math.floor(Math.random() * size)], 
    //               v: 0, 
    //               a: 0,
    //               kind: "normal"}
    // return {allUser: HotData("setUser", "getUser", user), myUser: user};

    const user = {r: [Math.floor(Math.random() * size), Math.floor(Math.random() * size)], 
                  kind: "z",
                  name: GetData("name"),
                  room: GetData("room")}
    // return {allUser: [user], myUser: user};

    originUser.allUser = [user];
    originUser.myUser = user;

}
