import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { usernameContext, passwordContext } from '../core';

function Join({ location }) {
    const [usrname, setUsrname] = useState('');
    const [pwd, setPwd] = useState('');
    const username = useContext(usernameContext);
    const password = useContext(passwordContext);

    const clickEvent = () => {
        username.set(usrname);
        password.set(pwd);
    }

    return (
        <>
            <h1>Login</h1>
            <div><input placeholder="username" type="text" onChange={(event) => setUsrname(event.target.value)} /></div>
            <div><input placeholder="password" type="text" onChange={(event) => setPwd(event.target.value)} /></div>

            <Link onClick={(event) => (!usrname || !pwd) ? event.preventDefault() : null} to={`/Room`}>
                <button type="submit" onClick={() => clickEvent()}>Sign In</button>
            </Link>
        </>
    )
}

export default Join
