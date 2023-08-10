const express = require('express')
const app = express()
const port = 9192
const rutas = require('./routes/routes')
app.use(rutas)
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.listen(port)