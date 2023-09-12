import multer from 'multer'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname)
    }
})

const soloImagenes = (req, file, cb) => {

    // sdf1231237.adsfa.png
    const puntos = file.originalname.split(".") // [sdf1231237,adsfa,png]
    const ext = puntos[puntos.length-1]

    if(ext == "jpg" || ext == "png" || ext == "gif" ){
        return cb(null, true)
    }else{
        return cb(new Error('Solo jpg y png '))
    }
}

const upload = multer({ 
    storage: storage, 
    fileFilter: soloImagenes 
})

export default upload