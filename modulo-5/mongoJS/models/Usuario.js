import mongoose from "mongoose";

const user = new mongoose.Schema({
    name:{
        required: true,
        type: String,
    },
    age:{
        required: true,
        type: Number
    }
});

export default mongoose.model('User',user)