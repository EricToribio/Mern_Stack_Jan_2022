const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors(), express.json(), express.urlencoded({extended: true}));

// To initialize the socket, we need to
// invoke the socket.io library
// and pass it our Express server
const server = app.listen(8000, () =>
  console.log('The server is all fired up on port 8000'))
const io = require('socket.io')(server, { cors: true })


    io.on("connection", socket => {
        console.log("Nice to meet you ")
        socket.emit("test", "This is a test.")
        console.log(socket.id)
    });
