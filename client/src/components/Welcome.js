import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
    return (
        <>
            <div>Welcome</div>
            <Link to={`/Join`}>
                <button type='submit'>Login</button>
            </Link>
        </>
    )
}

export default Welcome
