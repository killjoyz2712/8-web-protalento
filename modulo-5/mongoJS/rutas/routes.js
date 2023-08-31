import {Router} from "express"
import Usuario from "../models/Usuario.js";

const router = Router();

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