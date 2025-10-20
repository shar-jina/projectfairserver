const { json } = require('express');
const projects=require('../Models/projectdetail')

exports.addprojectcontroller=async(req,res)=>{
    console.log("inside projectcontroller");
    const userid=req.userid
    console.log(userid);
    
    const {title,language,github,website,overview}=req.body
    const projectimg=req.file.filename
    try{
        const existinguser=await projects.findOne({github})
        if(existinguser){
            res.status(406).json("project already exist ")
        }
         else{
        const newproject=new projects({title,language,github,website,overview,projectimg,userid})
        await newproject.save()
        res.status(200).json(newproject)

    }
    }
    catch(err){
         res.status(401).json(err)
        

    }
}
 exports.getprojectcontroller=async(req,res)=>{
    console.log("inside gethome projectcontroller");
    try{
        const homeprojects=await projects.find().limit(3)
        res.status(200).json(homeprojects)

    }
    catch(err){
        res.status(401).json(err)

    }
}

 exports.getallprojectcontroller=async(req,res)=>{
    console.log("inside getallprojectcontroller");
     const projectname=req.query.search
    try{
       
        const allprojects=await projects.find({language:{$regex:projectname,$options:"i"}})
        res.status(200).json(allprojects)

    }
    catch(err){
        res.status(401).json(err)

    }
}
exports.getuserprojectcontroller=async(req,res)=>{
    const userid=req.userid
    try{
        const userprojects=await projects.find({userid})
        res.status(200).json(userprojects)

    }
    catch(err){

        res.status(401).json(err)
    }
}
exports.updateprojectcontroller=async(req,res)=>{
    console.log("inside updateprojectcontroller");
    const{pid}=req.params//to get the id of the user project
    const userid=req.userid
    const{title,language,github,website,overview,prjctimg}=req.body
    const uploadimg=req.file?req.file.filename:prjctimg
    try{
        const updateproject=await projects.findByIdAndUpdate({_id:pid},{title,language,github,website,overview,projectimg:uploadimg,userid},{new:true})
        res.status(200).json(updateproject)

    }
    catch(err){
        res.status(401).json(err)

    }
}
exports.deleteprojectcontroller=async(req,res)=>{
    console.log("inside updatprojectcontroller");
    const{pid}=req.params
    
    try{
        const deleteproject=await projects.findByIdAndDelete({_id:pid})
        res.status(200).json(deleteproject)
    }
     catch(err){
        res.status(401).json(err)

    }



    
}
