import {Router} from 'express';
import conexion from '../config/database.js';
import modelosInit from '../models/init-models.js'

let modelos = modelosInit(conexion)
const router = Router();

router.get('/api/empleados', async (req, res) => {
    const resultado = await modelos.empleados.findAll();
    res.status(200).json(resultado);
})

router.get('/api/empleado/:id', async (req, res) => {
    const id = req.params.id;
    const resultado = await modelos.empleados.findByPk(id);
    res.status(200).json(resultado);
})

router.post('/api/insertar', async (req, res) =>{
    const Empleados = modelos.empleados

    //parmas para el GET body para el POST
    const nombre = req.body.nombre
    const apellido_p = req.body.apellido_p
    const appellido_m = req.body.appellido_m
    const cedula = req.body.cedula
    const salario = req.body.salario
    const experencia = req.body.experencia
    const telefono = req.body.telefono
    const correo = req.body.correo

    const cliente = await Empleados.create({
        nombre,
        telefono,
        correo,
        apellido_p,
        appellido_m,
        cedula,
        salario,
        experencia
    })

    res.json(cliente)

});




export default router;
//module.exports = router