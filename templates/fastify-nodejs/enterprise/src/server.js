const fastify = require('fastify')({ logger: true })
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')

fastify.register(userRoutes, { prefix: '/users' })
fastify.register(productRoutes, { prefix: '/products' })

const start = async () => {
	try {
		await fastify.listen({ port: 3000 })
		console.log('Enterprise server running at http://localhost:3000')
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}

start()
