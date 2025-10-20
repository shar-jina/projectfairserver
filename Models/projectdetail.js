const mongoose=require('mongoose')
const projectschema=new mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    language:{
        type:String,
        requuired:true,
      

    },
    github:{
        type:String,
        required:true,
        unique:true
    },
    website:{
        type:String,
        required:true
    },
    overview:{
        type:String,
        required:true

    },
    projectimg:{
        type:String,
        required:true

    },
    userid:{
        type:String,
        required:true,
        unique:true

        
    }

})
const projects=mongoose.model("projects",projectschema)
module.exports=projects
