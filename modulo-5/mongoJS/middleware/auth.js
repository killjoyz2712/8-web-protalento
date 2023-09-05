const authMiddleware = (err, req,res,next)=>{
    if(err){
        console.log("Sucedio un error")
        res.status(401).send("No se encontro")
    }

    if(req.query.token == "perrito123") // Aqui se obtiene el token de forma mas dinamica
        next()
    else
        res.send("No tienes acceso")

}
export default authMiddleware