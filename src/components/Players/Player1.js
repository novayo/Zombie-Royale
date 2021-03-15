import React from 'react'

function Player1(props) {

    return (
        <div className="rectangle-black"
            style={{
                left: `${props.left}px`,
                top: `${props.top}px`
            }}>

        </div>
    )
}

export default Player1
