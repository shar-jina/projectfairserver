
const users=require('../Models/usermodel')
const jwt=require('jsonwebtoken')

exports.registercontroller= async (req,res)=>{
    console.log("inside register controller");
    const{name,email,password}=req.body
    console.log(name,email,password);
    //res.status(200).json("data transfer")

    try{
        const existinguser= await users.findOne({email})
        if(existinguser){
            res.status(406).json("user aleready existed")
        }
        else{
            console.log("inside register");
            
            const newuser=new users({name,email,password,github:"",linkedin:"",profile:""})
            await newuser.save()
            res.status(200).json(newuser)
        }


    }
    catch(err){
        res.status(401).json(err)

    }
    
    
}

 exports.logincontroller=async(req,res)=>{
    console.log("inside login controller");
    
    const{email,password}=req.body
    try{
        const existinguser=await users.findOne({email,password})
        if(existinguser){
            //generete token
            const token=jwt.sign({userid:existinguser._id},process.env.JWT_PASWD)
            res.status(200).json({user:existinguser,token})
        }
        else{
            res.status(404).json("invalid email/password")
        }

    }
    catch(err){
        res.status(401).json(err)
    }

}
exports.updateprofilecontroller=async(req,res)=>{
    const userid=req.userid
    const{name,email,password,github,linkedin,profile}=req.body
    const uploadimg=req.file?req.file.filename:profile
    try{
        const updateuser=await users.findByIdAndUpdate({_id:userid},{name,email,password,github,linkedin,profile:uploadimg},{new:true})
        res.status(200).json(updateuser)

    }
    catch{
        res.status(401).json(err)

    }
}
