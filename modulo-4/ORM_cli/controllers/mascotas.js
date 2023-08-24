const models = require('../models')

const obtenerMascotas = async (req,res) =>{
    const Mascotas = models.Mascotas
    const mascotas = await Mascotas.findAll()
    res.json(mascotas)
}

const obtenerMascota = async(req,res)=>{
    const id = req.params.id
    const Mascotas = models.Mascotas
    const mascota_resultado = await Mascotas.findOne({
        where:{
            'id': id
        }
    })
    res.json(mascota_resultado)
}


const obtenerPorEspecie = async(req,res)=>{
    const especie = req.body.especie
    const Mascotas = models.Mascotas
    const mascota_resultado = await Mascotas.findAll({
        where:{
            'especie': especie
        }
    })
    res.json(mascota_resultado)
}

const insertarMascota = async(req,res) =>{
    const Mascotas = models.Mascotas

    const nombre = req.body.nombre
    const especie = req.body.especie
    const id_cliente = req.body.id_cliente

    // const {nombre, especie, id_cliente} = req.body

    const mascota = await Mascotas.create({
        nombre,
        especie,
        id_cliente
    })

    res.json(mascota)

}

const actualizarMascota = async(req,res)=>{
    const Mascotas = models.Mascotas
    const id = req.params.id
    const mascota = await Mascotas.findOne({
        where:{
            'id': id
        }
    })

    mascota.nombre = req.body.nombre
    mascota.especie = req.body.especie 
    mascota.id_cliente = req.body.id_cliente

    await mascota.save()

    res.json(mascota)
}


const deleteMascota = async(req,res)=>{
    const Mascotas = models.Mascotas
    const id = req.params.id
    const mascota = await Mascotas.destroy({
        where:{
            'id': id
        }
    })

    res.json(mascota)

}

module.exports = {obtenerMascotas, obtenerMascota, insertarMascota, actualizarMascota, obtenerPorEspecie, deleteMascota}