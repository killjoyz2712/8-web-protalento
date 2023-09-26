const models = require('../models')

const holaMundo = (req, res)=>{
    res.json({"hola":"mundo"})
}

const insertarCliente = async (req, res) =>{
    const Clientes = models.Clientes

    //parmas para el GET body para el POST
    const nombre = req.body.nombre
    const direccion = req.body.direccion
    const telefono = req.body.telefono

    const cliente = await Clientes.create({
        "nombre": nombre,
        "direccion": direccion,
        "telefono": telefono
    })

    res.json(cliente)

}

const obtenerClientes = async (req, res) =>{
    const Clientes = models.Clientes
    const clientes = await Clientes.findAll()
    //Si necesitamos headers los sacamos asi:
    //console.log(req.headers)
    res.json(clientes)
}

const borrarCliente = async (req, res) =>{
    const Clientes = models.Clientes

    const id=req.params.id
    const cliente = await Clientes.destroy({
        where: {
            "id": id
        }
    })
    //Si necesitamos headers los sacamos asi:
    //console.log(req.headers)
    res.json({message:"Se ha eliminado el id "+id})
}



module.exports = {holaMundo, insertarCliente, obtenerClientes, borrarCliente}
