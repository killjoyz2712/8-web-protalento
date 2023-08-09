const express = require('express'); 
const app = express();

const rutas = require('./routes/routes')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(rutas)
app.listen(3000)

console.log('Servidor en puerto 3000');