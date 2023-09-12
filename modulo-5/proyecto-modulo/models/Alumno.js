import mongoose from "mongoose";

const alumno = new mongoose.Schema({
    nombre:{
        required: true,
        type: String,
    },
    fechaNacimiento:{
        required: false,
        type: String
    },
    email:{
        required: true,
        type: String
    },
    promedio:{
        required: true,
        type: Number
    },
    foto:{
        required: false,
        type: String
    },
    password:{
        required: true,
        type: String
    }
});

export default mongoose.model('Alumno', alumno)