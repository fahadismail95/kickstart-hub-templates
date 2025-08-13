const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const homeRouter = require('./routes/home')

app.use(express.json())
app.use('/', homeRouter)

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`)
})
