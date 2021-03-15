import React, { useContext } from 'react';
import { posContext } from '../core';
import Player1 from './Players/Player1';
import Player2 from './Players/Player2';

function Facotry(props) {
    const pContext = useContext(posContext);

    switch (props.type) {
        case 'player1':
            return <Player1 left={pContext.get.left + props.startLeft} top={pContext.get.top + props.startTop} />
        case 'player2':
            return <Player2 left={pContext.get.left + props.startLeft} top={pContext.get.top + props.startTop} />
        default:
            return <div></div>
    }
}

export default Facotry
