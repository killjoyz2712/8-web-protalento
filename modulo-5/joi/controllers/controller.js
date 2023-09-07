import Joi from 'joi'

const helloWorld = async (req,res) =>{
    const {nombre, email, password, pin, date} = req.body
    
    const schema = Joi.object({
        nombre: Joi.string().required(),
        email: Joi.string().email().required(),
        // password: Joi.string().min(8).required(),
        password: Joi.string().pattern(new RegExp(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/)),
        pin: Joi.number().min(1000).max(9999),
        date: Joi.string().pattern(new RegExp(/^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/))
    })

    const {error, value} = schema.validate({
        "nombre": nombre,
        "email": email,
        "password": password,
        "pin": pin,
        "date": date
    })

    if(error){
        res.status(500).json(error)
    }else{
  
        res.json({
            "nombre": nombre,
            "email": email,
            "password": password
        })
    }
    
}

export { helloWorld }