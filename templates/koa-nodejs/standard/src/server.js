const Koa = require('koa')
const Router = require('koa-router')
const routes = require('./routes')

const app = new Koa()
const router = new Router()

routes(router)
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
	console.log('Server running at http://localhost:3000')
})
