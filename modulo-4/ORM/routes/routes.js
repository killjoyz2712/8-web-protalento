const {Router} = require('express');
const Usuario = require('../models/Usuario');
const router = Router();

router.get('/', async (req, res) => {
    try {
        let usuarios = await Usuario.findAll({
            where: {nombre: "Roberto"}
        }); // SELECT * FROM Usuarios
        res.status(200).json(usuarios)
    } catch (error) {
        res.status(500).json({error: error})
    }
})

module.exports = router