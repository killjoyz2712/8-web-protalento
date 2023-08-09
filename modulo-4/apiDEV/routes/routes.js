const {Router} = require('express');

const router = Router();

// req = request, res = response
router.get('/hola/:nombre', function(req,res){
    const {nombre} = req.params;
    res.status(200).json({"respuesta":`Buenas noches ${nombre}`})
})
router.get('/adios', function(req,res){
    res.status(200).json({"respuesta":"adios"})
})
router.get('/dias', function(req,res){
    res.status(200).json({"respuesta":"Buenos Dias"})
})

router.post('/regresaDatos', function(req,res){
    const {Edad}= req.body
    if(Edad > 50){
        res.status(200).json("Ya eres viejo")
        return
    }else{
        res.status(200).json("Eres joven")
        return
    }
    res.status(200).json("No hay edad")
})

module.exports = router;