import { Router } from "express"
import {createAlumno} from '../controllers/AlumnoController.js'
const router = Router();

router.get("/hello", function(req,res){
    res.json({"Hola": "Mundo"})
})

router.post("/alumno", createAlumno)

export default router