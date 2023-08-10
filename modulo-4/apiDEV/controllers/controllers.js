const {Pool} = require('pg');

const conexion = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'restaurante',
    port: 5432
});


function saludo(req,res){
    const {nombre} = req.params;
    res.status(200).json({"respuesta":`Buenas noches ${nombre}`})
}

function edad(req,res){
    const {Edad}= req.body
    if(Edad > 50){
        res.status(200).json("Ya eres viejo")
        return
    }else{
        res.status(200).json("Eres joven")
        return
    }
    res.status(200).json("No hay edad")
}

async function empleados(req,res){
    let respuesta_base = await conexion.query("SELECT * FROM empleados WHERE id_empleado = 1")
    res.status(200).json(respuesta_base.rows)
}

async function crearEmpleado(req,res){
    let {nombre,
        apellido_p,
        appellido_m,
        telefono,
        correo,
        cedula,
        salario,
        experencia} = req.body
    let respuesta_base = await conexion.query(`INSERT INTO 
    empleados(nombre,apellido_p,appellido_m,telefono,correo,cedula,salario,experencia)
    VALUES($1,$2,$3,$4,$5,$6,$7,$8)`,[nombre,apellido_p,appellido_m,telefono,correo,cedula,salario,experencia])
    res.status(200).json(respuesta_base)
}

module.exports = {
    saludo,
    edad,
    empleados,
    crearEmpleado,
}
