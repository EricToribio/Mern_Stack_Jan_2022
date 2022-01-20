const ProductController = require('../controllers/product.controller')

module.exports = app => {
    app.post("/api/product/new", ProductController.addProduct)
    app.get("/api/product", ProductController.showAllProducts)
}