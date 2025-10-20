const jwt=require('jsonwebtoken')

const jwtmiddleware=(req,res,next)=>{
    console.log("inside middleware");
    console.log(req.headers);
    
    const token=req.headers["authorization"].split(" ")[1]
    if(token){
        try{
            const jwtresponse=jwt.verify(token,process.env.JWT_PASWD)
            console.log(jwtresponse);
            req.userid=jwtresponse.userid
            next()
            

        }
        catch(err){
            res.status(401).json("authorization failed please login")

        }

    }
    else{
        res.status(404).json("authorization failed token missed")



    }

    
}

module.exports=jwtmiddleware