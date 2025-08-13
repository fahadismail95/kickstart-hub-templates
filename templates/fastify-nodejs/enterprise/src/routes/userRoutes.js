const userController = require('../controllers/userController')

async function userRoutes(fastify, options) {
	fastify.get('/', userController.getAllUsers)
	fastify.get('/:id', userController.getUserById)
}

module.exports = userRoutes
