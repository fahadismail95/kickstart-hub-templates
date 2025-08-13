const Hapi = require('@hapi/hapi')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')

const server = Hapi.server({
	port: 3000,
	host: 'localhost',
})

userRoutes.forEach((route) => server.route(route))
productRoutes.forEach((route) => server.route(route))

const start = async () => {
	await server.start()
	console.log('Enterprise server running at:', server.info.uri)
}

start()
