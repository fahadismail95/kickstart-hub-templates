const homeService = require('../services/homeService')
exports.index = (req, res) => {
	res.send(homeService.getWelcomeMessage())
}
