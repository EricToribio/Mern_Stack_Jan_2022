const mongoose = require('mongoose')
//change names to current project
mongoose.connect('mongodb://localhost/authors', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection with database'))
    .catch(err => console.log('Something went wrong when connecting to the database' , err))