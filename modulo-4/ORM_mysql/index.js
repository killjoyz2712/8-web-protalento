require('dotenv').config()
const express = require('express')
const router = require('./router/router')

const app = express()
app.use(express.json())
app.use(router)
app.listen(process.env.APP_PORT)

console.log(`Corriendo http://localhost:${process.env.APP_PORT}`)
