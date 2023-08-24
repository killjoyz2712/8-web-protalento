const {Router} = require('express')
const router = Router()
const {holaMundo, insertarCliente, obtenerCliente, obtenerClientes, borrarCliente, actualizarCliente} = require("../controllers/clientes")
const {obtenerMascotas, obtenerMascota, insertarMascota, actualizarMascota, obtenerPorEspecie, deleteMascota} = require("../controllers/mascotas")
const {obtenerConsultas} = require("../controllers/consultas")
router.get('/', holaMundo)

//CRUD Clientes
router.get('/clientes/:id', obtenerCliente)
router.get('/clientes', obtenerClientes)
router.post('/clientes', insertarCliente)
router.put('/clientes/:id', actualizarCliente)
router.delete('/clientes/:id', borrarCliente)

//CRUD Mascotas
router.get("/mascotas", obtenerMascotas)
router.get("/mascotas/:id", obtenerMascota)
router.post("/mascota/especie",obtenerPorEspecie)
router.post("/mascotas", insertarMascota)
router.put("/mascotas/:id", actualizarMascota)
router.delete("/mascotas/:id", deleteMascota)

//CRUD Consultas
router.get("/consultas", obtenerConsultas)
module.exports = router;