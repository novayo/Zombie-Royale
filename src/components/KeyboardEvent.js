import React, { useState, useContext, useEffect } from 'react';
import { posContext, objectContext } from '../core';

function KeyboardEvent() {
    const [isPress, setIsPress] = useState(false);
    const pContext = useContext(posContext);
    const obContext = useContext(objectContext);

    useEffect(() => {
        window.addEventListener('keydown', (event) => {
            event.preventDefault();
            if (isPress) return;
            setIsPress(true);
            switch (event.key) {
                case 'w':
                case 'a':
                case 's':
                case 'd':
                    pContext.set(event.key);
                    break;
                case 'z':
                    obContext.set('player1')
                    break;
                case 'x':
                    obContext.set('player2')
                    break;
                case 'p':
                    obContext.set('pop')
                    break;
                default:
                    break;
            }
        });

        window.addEventListener('keyup', (event) => {
            event.preventDefault();
            setIsPress(false);
        });

        // eslint-disable-next-line
    }, [])

    return <></>
}

export default KeyboardEvent;
