const Koa = require('koa')
const Router = require('koa-router')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')

const app = new Koa()
const router = new Router()

userRoutes(router)
productRoutes(router)

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
	console.log('Enterprise server running at http://localhost:3000')
})
