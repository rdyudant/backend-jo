require('dotenv').config()
const express = require('express')
const cors = require('cors')

const jobOrderRoutes = require('./routes/jobOrder-route')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/job-order', jobOrderRoutes)

module.exports = app