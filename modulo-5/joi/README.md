1. npm init -y 
2. npm install express nodemon dotenv pg
3. Crear archivo index.js

import 'dotenv/config'
import express from "express";
import router from "./router/router.js";
const port = process.env.APP_PORT //Archivo de entorno .env

const app = express()
app.use(express.json())
app.use(router)
app.listen(port)

console.log(`Corriendo ${process.env.APP_NAME}🚀 mi servidor en http://localhost:${port} `)

4. Crear archivo .env con la configuracion de Puerto y Base de datos

5. Agregar el nodemon al archivo package.json y type: "module"

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon"
  },

"type": "module",

6. Crear una carpeta router y un archivo router.js

import { Router } from "express"

const router = Router()

export default router

7. Crear una carpeta config y un archivo db.js

import pg from 'pg'
const { Pool } = pg

const conexion = new Pool({
    host: "localhost",
    user: "postgres",
    password: "root",
    database: "veterinaria",
    port: 5432
})

export default conexion

8. Reemplaza por tus variables de entorno

const conexion = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASER,
    port: process.env.DB_PORT
})

9. Crear carpeta controllers y un controlador por cada tabla. Ejemplo, clientes.js

10. En tu controlador importa la configutacion de bdd

import conexion from '../config/db.js'

11. Crea las funciones CRUD para tu tabla (No olvides exportarlas)

const getClientes = async (request,response) =>{
    const clientes = await conexion.query("SELECT * FROM clientes")
    response.json(clientes.rows)
}

export {getClientes}

12. Crea la ruta para tu funcion, no olvides importarla

import { getClientes } from "../controllers/clientes.js"
const router = Router()

router.get("/clientes",getClientes)

13. Crea tus funciones crud y anexalas a su verbo respectivo

const getClientes = async (request,response) =>{
    const clientes = await conexion.query("SELECT * FROM clientes ORDER BY id")
    response.json(clientes.rows)
}

const insertCliente = async(request, response) =>{
    const {nombre, direccion, telefono} = request.body
    const cliente = await conexion.query(`INSERT INTO clientes(nombre,direccion,telefono) VALUES('${nombre}','${direccion}','${telefono}')`)
    
    response.json({success:cliente.rowCount})

}

const updateCliente = async(request, response) =>{
    const id = request.params.id
    const {nombre, direccion, telefono} = request.body
    const cliente = await conexion.query(`UPDATE clientes SET nombre='${nombre}', direccion='${direccion}', telefono='${telefono}' WHERE id='${id}'`)
    
    response.json({success:cliente.rowCount})
}

const deleteCliente = async(request, response) =>{
    const id = request.params.id
    const cliente = await conexion.query(`DELETE FROM clientes WHERE id='${id}'`)
    
    response.json({success:cliente.rowCount})
}

router.get("/clientes",getClientes)
router.post("/clientes",insertCliente)
router.put("/clientes/:id",updateCliente)
router.delete("/clientes/:id",deleteCliente)

