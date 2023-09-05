import {Router} from "express"
import Usuario from "../models/Usuario.js";
import authMiddleware from "../middleware/auth.js";
const router = Router();

router.get("/hello", function(req,res){
    res.json({"Hola": "Mundo"})
})
/*
router.use((req,res,next)=>{
    if(req.query.password == "perrito123"){
        next()
    }else if(req.query.password == "gato123"){
        // res.send({
        //    alert:"Password sospechoso"
        // })
        console.log("Password sospechoso")
        next()
    }else{
        res.send("No tienes acceso")
    }

    console.log(`En tro al middleware desde: ${req.method} ${req.ip}`)
})*/

router.use(authMiddleware)


router.get("/goodbye", function(req,res){
    res.json({"adios": "Mundo"})
})

router.get('/getAll', async function(req, res){
    try {
       const result = await Usuario.find()
       res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

router.post('/registro', async function(req, res){
    const usuario = new Usuario({
        name: req.body.name,
        age: req.body.age
    });

    try {
        const guardar = await usuario.save();
        res.status(200).json(guardar)
    } catch (error) {
        res.status(500).json("Error")
    }
})

export default router;