const productController = require('../controllers/productController')

async function productRoutes(fastify, options) {
	fastify.get('/', productController.getAllProducts)
	fastify.get('/:id', productController.getProductById)
}

module.exports = productRoutes
