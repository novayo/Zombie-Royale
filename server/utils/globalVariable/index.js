const Handler = require('./data_handler')


class globalVariable {
    constructor() {
        this.handler = new Handler()
    }

    addUser(_id, name, room, tick) {
        this.handler.addUser(_id, name, room, tick)
    }

    setUserInfo(_id, name, room, kind, r) {
        this.handler.setUserInfo(_id, name, room, kind, r);
    }

    setRoomBroadcastData(room, data) {
        this.handler.setRoomBroadcastData(room, data);
    }

    getAllUserName() {
        return this.handler.getAllUsersName();
    }

    getAllUserInfoList() {
        return this.handler.getAllUserInfoList();
    }

    getRoomBroadcastData(room) {
        return this.handler.getRoomBroadcastData(room);
    }

    getAllroom() {
        return this.handler.getAllRoom();
    }

    roomIsBroadCast(room) {
        let broadCastData = this.handler.getAllBroadCastRoomData();
        return room in broadCastData;
    }

    getRoomTick(room) {
        return this.handler.getRoomTick(room);
    }
}

const gv_ = new globalVariable()

module.exports = gv_