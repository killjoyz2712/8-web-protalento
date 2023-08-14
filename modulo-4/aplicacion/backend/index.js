const express = require('express')
const app = express()
const cors = require('cors');
const port = 3000
const rutas = require('./routes/routes')
app.use(rutas)
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended:false}))
app.listen(port)