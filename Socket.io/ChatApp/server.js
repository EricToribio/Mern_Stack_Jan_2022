const express = require("express");
const cors = require("cors")
const cookies = require("cookie-parser");
const port = 8000;
const app = express();
const server = app.listen(port, ()=>console.log(`Listening on port ${port}... `))

const io = require("socket.io")(server, { cors : true })
app.use(cors({
    credentials:true,
    origin: "http://localhost:3000"
}));
app.use(express.json());
app.use(cookies());


require("./server/config/mongoose.config")()
require("./server/routes/chatRoom.routes")(app)
require("./server/routes/user.routes")(app)
io.on("connection", socket => {
    console.log(socket.id);
    socket.on('chat', (msg) => {
        io.emit('post chat' , msg)
    })
})