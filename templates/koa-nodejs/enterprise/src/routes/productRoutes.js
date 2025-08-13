const productController = require('../controllers/productController')

module.exports = function (router) {
	router.get('/products', productController.getAllProducts)
	router.get('/products/:id', productController.getProductById)
}
