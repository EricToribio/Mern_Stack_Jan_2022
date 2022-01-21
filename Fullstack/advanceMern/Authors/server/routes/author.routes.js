const AuthorsController = require('../controllers/author.controllers')

module.exports = app => {
    app.post("/api/authors/new", AuthorsController.addAuthors)
    app.get("/api/authors", AuthorsController.showAllAuthors)
    app.get("/api/authors/:id" , AuthorsController.showOneAuthor)
    app.put("/api/authors/update/:id" , AuthorsController.updateExistingAuthor)
    app.delete("/api/authors/delete/:id" , AuthorsController.deleteAuthor)
}