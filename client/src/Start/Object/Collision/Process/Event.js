
const distance = (pos1, pos2) => {
    return ((pos1[0] - pos2[0]) ** 2 + (pos1[1] - pos2[1]) ** 2) ** 0.5
}


export const circleInterval = (myCircle, circle, rad) => {
    for(var i = 0; i < circle.length; i++){
        var d = distance(myCircle.r, circle[i].r);
        if(d !== 0 && d <= (2 * rad)){
            return {event: true, index: i}
        }
    }
    return {event: false}
}

export const circleRect = (myCircle, rect, rad, width, height) => {
    for(var i = 0; i < rect.length; i++){
        if((myCircle.r[0] + rad >= rect[i].r[0] && 
            myCircle.r[0] - rad <= rect[i].r[0] + width && 
            myCircle.r[1] + rad >= rect[i].r[1] && 
            myCircle.r[1] - rad <= rect[i].r[1] + height)
            ||
            distance(myCircle.r, [rect[i].r[0] +     0, rect[i].r[1] +      0]) <= rad ||
            distance(myCircle.r, [rect[i].r[0] + width, rect[i].r[1] +      0]) <= rad ||
            distance(myCircle.r, [rect[i].r[0] +     0, rect[i].r[1] + height]) <= rad ||
            distance(myCircle.r, [rect[i].r[0] + width, rect[i].r[1] + height]) <= rad 
            ){
            return {event: true, index: i}
        }
    }
    return {event: false}
}
