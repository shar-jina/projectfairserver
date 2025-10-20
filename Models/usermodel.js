const mongoose=require('mongoose')
const { type } = require('os')

const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        requuired:true,
        unique:true

    },
    password:{
        type:String,
        required:true,
    },
    github:{
        type:String,
    },
    linkedin:{
        type:String,

    },
    profile:{
        type:String,

    }

})
const users=mongoose.model("user",userschema)
module.exports=users