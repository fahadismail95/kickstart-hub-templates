import express from 'express'
const app = express()
app.get('/', (req, res) => {
	res.send('Hello World from Express + TypeScript Minimal!')
})
app.listen(3000)
