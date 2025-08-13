const userController = require('../controllers/userController')

module.exports = [
	{
		method: 'GET',
		path: '/users',
		handler: userController.getAllUsers,
	},
	{
		method: 'GET',
		path: '/users/{id}',
		handler: userController.getUserById,
	},
]
