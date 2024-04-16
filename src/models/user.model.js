import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type: String, //validaciones
        // required: true,
        trim:true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    password:{
        type: String,
        required:true
    },
    message:{
        type: String,
        // required: true,
        trim: true,
        
    },
    rol: {
        type: String,
        enum: ['guest', 'admin'], 
        required: true
    }

},{timestamps:true})

export default mongoose.model('User', userSchema)
