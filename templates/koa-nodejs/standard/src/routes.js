module.exports = function (router) {
	router.get('/', async (ctx) => {
		ctx.body = 'Hello World from Koa Standard!'
	})

	router.get('/about', async (ctx) => {
		ctx.body = 'This is a Koa standard project.'
	})
}
