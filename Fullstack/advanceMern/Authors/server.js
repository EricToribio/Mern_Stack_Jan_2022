const express = require('express');
const app = express();
const cors = require('cors')
const port = 8000;

require("./server/config/mongoose.config")

app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new

//replace with project names
const AllMyAuthorsRoutes = require("./server/routes/author.routes")
AllMyAuthorsRoutes(app)
require('./server/routes/author.routes')(app); 
app.listen(port, () => console.log(`Listening on port: ${port}`) );