const Hapi = require('@hapi/hapi')

const server = Hapi.server({
	port: 3000,
	host: 'localhost',
})

server.route({
	method: 'GET',
	path: '/',
	handler: (request, h) => {
		return 'Hello World from Hapi Minimal!'
	},
})

const start = async () => {
	await server.start()
	console.log('Server running at:', server.info.uri)
}

start()
