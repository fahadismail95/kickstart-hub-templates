const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
	ctx.body = 'Hello World from Koa Minimal!'
})

app.listen(3000, () => {
	console.log('Server running at http://localhost:3000')
})
