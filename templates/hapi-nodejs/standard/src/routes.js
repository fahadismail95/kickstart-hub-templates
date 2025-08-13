module.exports = [
	{
		method: 'GET',
		path: '/',
		handler: (request, h) => 'Hello World from Hapi Standard!',
	},
	{
		method: 'GET',
		path: '/about',
		handler: (request, h) => 'This is a Hapi standard project.',
	},
]
