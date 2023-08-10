const {Router} = require('express');
const router = Router();

router.get('/hello/:nombre', (req, res) => {

    res.status(200).json({
        "saludo":`Hello ${req.params.nombre}!`
    })
  })

// IMPORTANTE: Aqui va, lo que le queremos comunicar a otros archivos, lo que vamos a EXPORTARß
module.exports = router;