const uploadFile = (req, res) =>{
    if(req.file)
        res.json({
            nombre: req.body.nombre,
            success: "http://img.miaplicacion.com/" + req.file.path
        })
    else
        res.json({"error": "Archivo no subido"})

}

export {uploadFile}