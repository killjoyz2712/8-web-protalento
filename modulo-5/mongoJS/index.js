import express from 'express'; //const express = require('express')
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import router from './rutas/routes.js';
dotenv.config() //Traer las variables del .env

//config de la base

const cadenaMongo = process.env.URL
mongoose.connect(cadenaMongo) // Hace la conexion
const database = mongoose.connection // Checa si la conexion esta activa

database.on('error',(error)=>{
    console.log(error)
})

database.once('connected',()=>{
    console.log("Conexion exitosa")
})


// configracionde express
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/api",router)

app.listen(process.env.PORT)
console.log("Server running on http://localhost:3000")