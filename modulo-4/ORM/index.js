const express = require('express');
const conexion = require('./config/database')
const usuario = require('./models/Usuario');
const rutas = require('./routes/routes');
const app = express()

async function iniciarServidor(){
    try {
        await conexion.sync({force:false}) 
    } catch (error) {
        console.error("Error al sincronizar: "+ error)
        return;
    }
    
    app.use(express.json())
    app.use(express.urlencoded({extended:false}))
    app.use(rutas)
    app.listen(3000)

    console.log("Servidor escuchando en puerto 3000")
}

iniciarServidor()