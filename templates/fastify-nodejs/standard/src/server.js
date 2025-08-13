const fastify = require('fastify')({ logger: true })
const routes = require('./routes')

fastify.register(routes)

const start = async () => {
	try {
		await fastify.listen({ port: 3000 })
		console.log('Server running at http://localhost:3000')
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}

start()
