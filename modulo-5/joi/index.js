import 'dotenv/config'
import express from "express";
import router from "./router/router.js";
const port = process.env.APP_PORT //Archivo de entorno .env
// Crea una instancia de la aplicación Express
const app = express()
app.use(express.json())
//Le dice a la aplicacion que va a usar este router
app.use(router)
app.listen(port)

console.log(`Corriendo ${process.env.APP_NAME}🚀 mi servidor en http://localhost:${port} `)