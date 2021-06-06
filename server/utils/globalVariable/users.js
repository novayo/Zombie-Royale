const socket = require("../socket");

module.exports = class Users {
    constructor() {
        this.data = {} // {'_id': {'name', 'room', }}
        this.room_data = {} // {'room' : {'_id':[_id], 'tick'}}
    }

    addUser(_id, name, room, tick) {
        // user data
        if (!(_id in this.data)) {
            this.data[_id] = { 'name': name, 'room': room, 'kind': '', 'r': [-1, -1] }
        }
        else {
            console.log(`[加入使用者異常!] ${_id}你已經在裡面了`);    //未來寫成Log.txt
            return;
        }
        // room data : init
        if (!(room in this.room_data)) {
            this.room_data[room] = { '_id': [], 'tick': tick }
        }
        // 加入使用者socket id
        this.room_data[room]['_id'].push(_id)
    }

    setUserInfo(_id, name, room, kind, r) {

        if (!(_id in this.data)) {
            return
        }

        // 之後優化
        this.data[_id]['name'] = name
        this.data[_id]['room'] = room
        this.data[_id]['kind'] = kind
        this.data[_id]['r'] = r
    }

    getAllRoom() {
        return this.room_data;
    }

    getAllUsersName() {
        let names = []
        for (let _id in this.data) {
            let username = this.data[_id]['name'];
            names.push(username);
        }
        return names
    }

    getAllUserInfoList() {
        let ret = []
        for (let _id in this.data) {
            let name = this.data[_id]['name']
            let room = this.data[_id]['room']
            let kind = this.data[_id]['kind']
            let r = this.data[_id]['r']
            ret.push({ '_id': _id, 'r': r, 'name': name, 'room': room, 'kind': kind })
        }
        return ret
    }

    getRoomTick(room) {
        if (!(room in this.room_data)) {
            return 64;  //未來改成讀取全域設定檔變數
        }
        let tick = 0
        tick = this.room_data[room]['tick']
        return tick
    }

}