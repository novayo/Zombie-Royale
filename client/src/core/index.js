import React from 'react';

export const usernameContext = React.createContext();
export const initialUsername = '';
export const usernameReducer = (state, action) => {
    return action;
}

export const passwordContext = React.createContext();
export const initialPassword = '';
export const passwordReducer = (state, action) => {
    return action;
}

export const roomContext = React.createContext();
export const initialRoom = '';
export const roomReducer = (state, action) => {
    return action;
}