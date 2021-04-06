import React, { useContext } from 'react';
import { usernameContext, passwordContext, roomContext } from '../core';


function Play() {
    const username = useContext(usernameContext);
    const password = useContext(passwordContext);
    const room = useContext(roomContext);

    return (
        <div>
            Play - {username.get} - {password.get} - {room.get}
        </div>
    )
}

export default Play
