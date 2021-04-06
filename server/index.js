const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.SERVER_PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    //https://stackoverflow.com/a/64805972
    cors: {
        origin: `http://localhost:3000`,
        credentials: true
    }
}); //https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

app.use(router); // as middleware

io.on('connection', (socket) => {
    socket.on('SetRoom', (data) => {
        if (data.room) {
            console.log(data)
        } else {
            socket.emit('getRoom', { 'room': 'randomRoomNumber' })
        }
    })
});

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));