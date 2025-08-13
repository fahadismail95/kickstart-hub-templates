const userController = require('../controllers/userController')

module.exports = function (router) {
	router.get('/users', userController.getAllUsers)
	router.get('/users/:id', userController.getUserById)
}
