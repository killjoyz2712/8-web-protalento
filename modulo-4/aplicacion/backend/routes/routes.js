const {Router} = require('express');
const router = Router();

router.get('/hello/:nombre', (req, res) => {
    /* Esto permite el paso del CORS*/
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
 
    res.status(200).json({
        "saludo":`Hello ${req.params.nombre}!`
    })
  })

// IMPORTANTE: Aqui va, lo que le queremos comunicar a otros archivos, lo que vamos a EXPORTARß
module.exports = router;