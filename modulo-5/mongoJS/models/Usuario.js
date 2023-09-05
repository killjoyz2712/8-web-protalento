import mongoose from "mongoose";

const user = new mongoose.Schema({
    name:{
        required: true,
        type: String,
    },
    age:{
        required: true,
        type: Number
    },
    email:{
        required: true,
        type: String
    },
    password:{
        required: true,
        type: String
    }
});

export default mongoose.model('User',user)