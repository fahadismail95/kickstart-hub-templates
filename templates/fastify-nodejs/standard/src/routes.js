async function routes(fastify, options) {
	fastify.get('/', async (request, reply) => {
		return { hello: 'world' }
	})

	fastify.get('/about', async (request, reply) => {
		return { about: 'This is a Fastify standard project.' }
	})
}

module.exports = routes
