import express from 'express';
import rutas from './routes/rutas.js';
import firebaseConfig from "./config/firebase.config.js";
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(rutas)
app.listen(3000)

console.log("El servidor esta arriba")