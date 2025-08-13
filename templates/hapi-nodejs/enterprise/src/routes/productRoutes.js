const productController = require('../controllers/productController')

module.exports = [
	{
		method: 'GET',
		path: '/products',
		handler: productController.getAllProducts,
	},
	{
		method: 'GET',
		path: '/products/{id}',
		handler: productController.getProductById,
	},
]
