/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const express=require("express");
const router = express.Router();
var controller=require("../controller/home");
router.get('/',function(req,res){
    res.render('home'); 
});

router.get('/getdata',async (req,res)=>{
    var data1=  controller.gethomedata();
     res.status(200).json(data1);
});
module.exports = router;
