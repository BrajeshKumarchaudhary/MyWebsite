/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const express=require("express");
const router = express.Router();

router.get('/',function(req,res){
    res.render('home'); 
});
module.exports = router;
