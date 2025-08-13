require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = process.env.PORT || 3000
const homeRouter = require('./routes/home')
const errorHandler = require('./middleware/errorHandler')

app.use(express.json())
app.use(morgan('dev'))
app.use('/', homeRouter)
app.use(errorHandler)

app.listen(PORT, () => {
	console.log(`Enterprise server running on http://localhost:${PORT}`)
})
