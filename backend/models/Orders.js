const  mongoose  = require("mongoose")

const Schema=mongoose.Schema
//const ObjectId=Schema.ObjectId
const Order=mongoose.model("Order",Schema({
    email:{type:String,required:true,unique:true},
    order_data:{type:Array,required:true},
   
}))


module.exports=Order