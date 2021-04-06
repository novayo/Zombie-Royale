import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { usernameContext, passwordContext, roomContext } from '../core';
import { socket } from '../Socket';

function Room({ location }) {
    const [room, setRoom] = useState('');
    const username = useContext(usernameContext);
    const password = useContext(passwordContext);
    const rm = useContext(roomContext);

    useEffect(() => {
        socket.on('getRoom', (msg) => {
            console.log(msg.room)
            rm.set(msg.room);
        })
    }, [])

    const Start = () => {
        socket.emit('SetRoom', { 'username': username, 'password': password, 'room': null });
        // while (!rm.get);
    }

    const RoomStart = () => {
        socket.emit('SetRoom', { 'username': username, 'password': password, 'room': room });
        rm.set(room);
    }

    return (
        <>
            <Link onClick={null} to={`/Play`}>
                <button type="submit" onClick={() => Start()}>直接開始</button>
            </Link>

            <div><input placeholder="輸入房間" type="text" onChange={(event) => setRoom(event.target.value)} /></div>
            <Link onClick={null} to={`/Play`}>
                <button type="submit" onClick={() => RoomStart()}>輸入房間-開始</button>
            </Link>
        </>
    )
}

export default Room
