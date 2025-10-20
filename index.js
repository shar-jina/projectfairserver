const express=require('express')
require('dotenv').config()
const cors=require('cors')
const route=require('./Routes/router')
require('./Db/dbconnections')

const pfserver=express()
pfserver.use(cors())
pfserver.use(express.json())
pfserver.use(route)
pfserver.use('/uploads',express.static('./uploads'))

PORT=process.env.PORT||3000
pfserver.listen(PORT,()=>{
    console.log(`pfserver running at PORT =${PORT}`);
})

pfserver.get('/',(req,res)=>{
    res.status(200).send("server running at port 3000 and waiting fore client")
})
