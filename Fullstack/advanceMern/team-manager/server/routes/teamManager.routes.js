const TeamController = require('../controllers/teamManager.controllers')

//replace names for current project
module.exports = app => {
    app.post("/api/team/new", TeamController.addTeam)
    app.get("/api/team", TeamController.showAllTeams)
    app.get("/api/team/:id" , TeamController.showOneTeam)
    app.put("/api/team/update/:id" , TeamController.updateExistingTeam)
    app.delete("/api/team/delete/:id" , TeamController.deleteTeam)
}