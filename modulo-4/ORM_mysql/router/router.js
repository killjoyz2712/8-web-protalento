const {Router} = require('express')
const router = Router()
const {holaMundo, insertarCliente, obtenerClientes, borrarCliente} = require("../controllers/controllers")

router.get('/', holaMundo)
router.post('/cliente', insertarCliente)
router.get('/clientes', obtenerClientes)
router.delete('/cliente/:id', borrarCliente)

module.exports = router;