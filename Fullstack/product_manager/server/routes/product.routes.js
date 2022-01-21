const ProductController = require('../controllers/product.controller')

module.exports = app => {
    app.post("/api/product/new", ProductController.addProduct)
    app.get("/api/product", ProductController.showAllProducts)
    app.get("/api/product/:id" , ProductController.showOneProduct)
    app.put("/api/product/update/:id" , ProductController.updateExistingProduct)
    app.delete("/api/product/delete/:id" , ProductController.deleteProduct)
}