import io from 'socket.io-client';

export const URL = `${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}`;

export let socket = io(URL);

export var update = {
    state: false,
    time: "no support"
}

export var user = {
    '_id': null,
    Room: null,
    name: null,
    data: null,
    windowSize: { height: window.innerHeight, width: window.innerWidth }
}

export var map = {
    kind: null,
    size: null,
    data: null
}