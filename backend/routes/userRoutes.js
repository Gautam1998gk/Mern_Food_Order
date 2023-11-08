const express=require("express")
const User=require("../models/User")
const bcrypt =require("bcrypt")

const router=express.Router()
var jwt = require('jsonwebtoken');

router.post("/createuser",(req,res)=>{
    const hashpwd= bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(10))
    User.create({
        name:req.body.name,
        password:hashpwd,
        email:req.body.email,
        location:req.body.location,
        mobileno:req.body.mobileno,
        location:req.body.location,
    }).then(dbres=>{
        res.json({success:true})})
    .catch(dberr=>{
      if(dberr.code===11000){
        res.status(401).json({success:false})
    }else{
        res.json({success:false})
    }
     
})
})

router.post("/login",(req,res)=>{
    User.findOne({email:req.body.email})
    .then(dbres=>{
        const checkpwd=bcrypt.compareSync(req.body.password,dbres.password)
        if(checkpwd){
            const data={user:{id:dbres._id}}
            const authtoken=jwt.sign(data,process.env.Auth_Token, { expiresIn: '1h' })
            res.status(200).json({"message":"login successful",authtoken:authtoken})
        }else{
            res.status(402).json({"message":"Invalid credentails"})
        }
    }).catch(err=>{
        res.status(401).json({"message":"Email doesnot exists"})
    })
})



module.exports=router