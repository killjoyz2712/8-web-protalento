const models = require('../models')

const obtenerConsultas = async (req,res) =>{
    const Consultas = models.Consultas
    const consultas = await Consultas.findAll()
    res.json(consultas)
}

module.exports = {obtenerConsultas}