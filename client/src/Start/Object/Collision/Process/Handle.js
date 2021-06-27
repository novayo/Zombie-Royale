
function VelRebound(vel, myCircle, otherCircle) {
    const delta = 0.1;

    if (myCircle.r[0] - otherCircle.r[0] > 0) {
        vel[0] = delta
    } else if (myCircle.r[0] - otherCircle.r[0] < 0) {
        vel[0] = -delta
    }

    if (myCircle.r[1] - otherCircle.r[1] > 0) {
        vel[1] = delta
    } else if (myCircle.r[1] - otherCircle.r[1] < 0) {
        vel[1] = -delta
    } 

    return vel

}

function projection(a, b) {

    // 此處有待觀察

    // if (Math.abs(b[0]) <= 1) {
    //     return {"parallel": [0, b[1]], "vertical": [b[0], 0]}

    // } else if (Math.abs(b[1]) <= 1) {
    //     return {"parallel": [b[0], 0], "vertical": [0, b[1]]}

    // } else {
    //     const dot = a[0] * a[0] + b[1] * b[1]
    //     const lengthB = (b[0] ** 2 + b[1] ** 2) ** 0.5
    //     const parallel = [(dot / lengthB ** 2) * b[0], (dot / lengthB ** 2) * b[1]]
    //     const vertical = [a[0] - parallel[0], a[1] - parallel[1]]
    
    //     return {"parallel": parallel, "vertical": vertical}
    // }

    // 目前方案

    const dot = a[0] * a[0] + b[1] * b[1]
    const lengthB = (b[0] ** 2 + b[1] ** 2) ** 0.5
    const parallel = [(dot / lengthB ** 2) * b[0], (dot / lengthB ** 2) * b[1]]
    const vertical = [a[0] - parallel[0], a[1] - parallel[1]]

    return {"parallel": parallel, "vertical": vertical}

}

export function circleIntervalHandle(velVector, myCircle, otherCircle) {
    // velVector = myCircle.vel // 如果這樣寫遇到[0, 0]危險 !!!
    
    const vector = [otherCircle.r[0] - myCircle.r[0], otherCircle.r[1] - myCircle.r[1]]
    const vertical = projection(velVector, vector).vertical
    return VelRebound(vertical, myCircle, otherCircle)

}


export function circleRectHandle(velVector, myCircle, rect, rad, width, height) {
    // velVector = myCircle.vel

    if (rect.r[0] <= myCircle.r[0] + rad && myCircle.r[0] + rad <= rect.r[0] + width){
        velVector[0] = -Math.abs(velVector[0]) // 左邊
    } else if (rect.r[0] <= myCircle.r[0] - rad && myCircle.r[0] - rad <= rect.r[0] + width) {
        velVector[0] =  Math.abs(velVector[0]) // 右邊
    }

    if (rect.r[1] <= myCircle.r[1] + rad && myCircle.r[1] + rad <= rect.r[1] + height){
        velVector[1] = -Math.abs(velVector[1]) // 上邊
    } else if (rect.r[1] <= myCircle.r[1] - rad && myCircle.r[1] - rad <= rect.r[1] + height) {
        velVector[1] =  Math.abs(velVector[1]) // 下邊
    }

    return velVector

}

