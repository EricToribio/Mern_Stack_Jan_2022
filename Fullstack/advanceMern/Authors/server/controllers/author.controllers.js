const Authors = require("../models/authors.model")
//change names to fit current project
module.exports.addAuthors = (req, res) => {
    Authors.create(req.body)
        .then(newAuthor => res.json({  Author : newAuthor }))
        .catch(err => res.status(400).json(err))
}

module.exports.showAllAuthors = (req, res) => {
    Authors.find().sort({"name" : 1})
        .then(allAuthors => res.json({  Author : allAuthors}))
        .catch(err => res.json({ message : 'Something went wrong', error : err}))
}

module.exports.showOneAuthor = (req , res) => {
    Authors.findOne( {_id:  req.params.id} )
        .then(oneAuthor => res.json( { Author : oneAuthor }))
        .catch(err => res.json({message : "Something went wrong", error : err}))
}

module.exports.updateExistingAuthor = ( req , res ) => {
    Authors.findOneAndUpdate( {_id : req.params.id}, req.body, { new : true, runValidators : true  })
        .then(updateAuthor => res.json({  Author : updateAuthor }))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Authors.deleteOne( {_id : req.params.id})
        .then(result => res.json({ result : result }))
        .catch(err => res.json({ message : "Something went wrong ", error : err }))
}