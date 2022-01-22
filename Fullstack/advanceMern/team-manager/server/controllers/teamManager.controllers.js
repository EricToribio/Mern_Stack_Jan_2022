const Team = require("../models/teamManager.model")
//change names to fit current project
module.exports.addTeam = (req, res) => {
    Team.create(req.body)
        .then(newTeam => res.json({ team : newTeam }))
        .catch(err => res.status(400).json(err))
}
module.exports.showAllTeams = (req, res) => {
    Team.find()
        .then(allTeams => res.json({Team: allTeams}))
        .catch(err => res.json({ message : 'Something went wrong', error : err}))
}

module.exports.showOneTeam = (req , res) => {
    Team.findOne( {_id:  req.params.id} )
    .then(oneTeam => res.json({team : oneTeam}))
    .catch(err => res.json({message : "Something went wrong", error : err}))
}

module.exports.updateExistingTeam = ( req , res ) => {
    Team.findOneAndUpdate( {_id : req.params.id}, req.body, { new : true , runValidators : true })
        .then(updatedTeam => res.json({ team : updatedTeam }))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteTeam = (req, res) => {
    Team.deleteOne( {_id : req.params.id})
        .then(result => res.json({ result : result }))
        .catch(err => res.json({ message : "Something went wrong ", error : err }))
}