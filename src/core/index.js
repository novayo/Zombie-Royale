import React from 'react'

export const moveSpeed = 10;

export const posContext = React.createContext();
export const posInitial = { left: 0, top: 0 };
export const posReducer = (state, action) => {
    switch (action) {
        case 'w':
            return { left: state.left, top: state.top - moveSpeed };
        case 'a':
            return { left: state.left - moveSpeed, top: state.top };
        case 's':
            return { left: state.left, top: state.top + moveSpeed };
        case 'd':
            return { left: state.left + moveSpeed, top: state.top };
        default:
            return posInitial
    }
}

export const objectContext = React.createContext();
export const objectInitial = ['player1'];
export const objectReducer = (state, action) => {
    switch (action) {
        case 'player1':
            return state.concat(['player1'])
        case 'player2':
            return state.concat(['player2'])
        default:
            if (state.length > 1) {
                return state.slice(0, state.length - 1)
            } else {
                return objectInitial
            }
    }
}
