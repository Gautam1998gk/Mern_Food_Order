
const express=require("express")
const {Food,Category} = require("../models/foods")
const router=express.Router()


/* router.get("/",async(req,res,next)=>{
   // console.log(fetchFood());
    
    
        const foods=await fetchFood()
        res.json({ foods: foods });
     
}) */

router.get("/items",async(req,res)=>{
   const category =await Category.find()
   Food.find()
   .then(dbres=>{
    res.send([dbres,category])
   }).catch(err=>{
    res.status(501).send({message:"no items foumd"})
   })
})


module.exports=router