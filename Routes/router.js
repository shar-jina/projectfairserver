const express=require('express')
const usercontroller=require('../controller/usercontroller')
const projectcontroller=require('../controller/projectcontroller')
const jwtmiddleware=require('../middlewares/tokenmiddleware')
const multermiddleware=require('../middlewares/multermiddleware')

const router=express.Router()

//register
router.post('/register',usercontroller.registercontroller)

//login
router.post('/login',usercontroller.logincontroller)
//addproject
router.post('/addproject',jwtmiddleware,multermiddleware.single('prjctimg'),projectcontroller.addprojectcontroller)
//home project
router.get('/gethomeproject',projectcontroller.getprojectcontroller)
//all project
router.get('/getallproject',jwtmiddleware,projectcontroller.getallprojectcontroller)
//userproject
router.get('/getuserproject',jwtmiddleware,projectcontroller.getuserprojectcontroller)
//updateproject
router.put('/updateproject/:pid',jwtmiddleware,multermiddleware.single('prjctimg'),projectcontroller.updateprojectcontroller)
//deleteproject
router.delete('/deleteproject/:pid',jwtmiddleware,projectcontroller.deleteprojectcontroller)
//updateprofile
router.put('/updateprofile',jwtmiddleware,multermiddleware.single('profile'),usercontroller.updateprofilecontroller)









module.exports=router