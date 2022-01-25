const express = require('express');
const app = express();
const cors = require('cors')
const port = 8000;
const server = app.listen(port, () => console.log(`Listening on port: ${port}`) );

const io = require('socket.io')( server, { cors : true })
// require("./server/config/mongoose.config")

// app.use(cors());
// app.use(express.json()); // This is new
// app.use(express.urlencoded({ extended: true })); // This is new

// //replace with project names
// const AllMyChatAppRoutes = require("./server/routes/chatApp.routes")
// //AllMyProductRoutes(app)
//require('./server/routes/product.routes')(app); 

io.on("connection",socket => {
    console.log(socket.id);
    socket.on('chat', (newMsg) => {
        console.log(newMsg);
        io.emit('hostChat', newMsg)

    })
})



