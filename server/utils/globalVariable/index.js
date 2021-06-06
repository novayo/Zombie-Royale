const socket = require('../socket');
const Users = require('./users')


class globalVariable {
    constructor() {
        this.users = new Users()
    }

    addUser(_id, name, room, tick) {
        this.users.addUser(_id, name, room, tick)
    }
    setUserInfo(_id, name, room, kind, r) {
        this.users.setUserInfo(_id, name, room, kind, r)
    }

    getAllUserName() {
        return this.users.getAllUsersName()
    }
    getAllUserInfoList() {
        return this.users.getAllUserInfoList()
    }
    getAllroom() {
        return this.users.getAllRoom();
    }
    getRoomTick(room) {
        return this.users.getRoomTick(room);
    }
}

const gv_ = new globalVariable()

module.exports = gv_