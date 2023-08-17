require('dotenv').config()

const express = require('express'); 
const app = express();

const rutas = require('./routes/routes')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(rutas)
app.listen(process.env.PORT)
console.log('🚀 Bienvenido a '+process.env.APP_NAME);
console.log('Servidor en puerto '+process.env.PORT);