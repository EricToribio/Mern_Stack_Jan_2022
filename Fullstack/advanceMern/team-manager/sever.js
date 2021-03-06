const express = require('express');
const app = express();
const cors = require('cors')
const port = 8000;

require("./server/config/mongoose.config")

app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new

//replace with project names
const AllMyTeamRoutes = require("./server/routes/teamManager.routes")
AllMyTeamRoutes(app)
/require('./server/routes/teamManager.routes')(app); 
app.listen(port, () => console.log(`Listening on port: ${port}`) );
