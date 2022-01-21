//const Product = require("../models/product.models")
//change names to fit current project
//module.exports.addProduct = (req, res) => {
    Product.create(req.body)
    .then(newProduct => res.json({ product : newProduct }))
    .catch(err => res.json({message: "Something went wrong", error: err  }))
}

//module.exports.showAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json({product: allProducts}))
        .catch(err => res.json({ message : 'Something went wrong', error : err}))
}

//module.exports.showOneProduct = (req , res) => {
    Product.findOne( {_id:  req.params.id} )
    .then(oneProduct => res.json({product : oneProduct}))
    .catch(err => res.json({message : "Something went wrong", error : err}))
}

//module.exports.updateExistingProduct = ( req , res ) => {
    Product.findOneAndUpdate( {_id : req.params.id}, req.body, { new : true })
    .then(updatedProduct => res.json({ product : updatedProduct }))
    .catch(err => res.json({ message : "Something went wrong ", error : err }))
}

//module.exports.deleteProduct = (req, res) => {
    Product.deleteOne( {_id : req.params.id})
    .then(result => res.json({ result : result }))
    .catch(err => res.json({ message : "Something went wrong ", error : err }))
}