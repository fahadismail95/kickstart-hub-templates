const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const server = Hapi.server({
	port: 3000,
	host: 'localhost',
})

routes.forEach((route) => server.route(route))

const start = async () => {
	await server.start()
	console.log('Server running at:', server.info.uri)
}

start()
