const express=require('express')
const router=express.Router()
const {createcontact,updatecontact,deletecontact,getallcontact}=require('../controllers/authcontroller')

router.get("/",function(req,res){
    res.send("hey its working");
});

router.post("/add",createcontact);
router.put("/:postId",updatecontact);
router.delete("/delete/:postId",deletecontact);
router.get("/getallcontacts",getallcontact);

module.exports=router;
