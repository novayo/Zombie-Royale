
function SplitData(allObject) {
    var user = allObject.user

    var allWall = [];
    var allUser = [];
    
    for(let i = 0; i < user.length; i++){
        if(user[i].kind === "z"){
            allUser.push(user[i])

        }else if(user[i].kind === "x"){
            allWall.push(user[i])
        }
    }
    return {user: allUser, wall: allWall};
}

export default SplitData
