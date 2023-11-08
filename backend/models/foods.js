const  mongoose  = require("mongoose")

const Schema=mongoose.Schema
//const ObjectId=Schema.ObjectId
const Food=mongoose.model("Food",Schema({
    CategoryName:{type:String,required:true},
    name:{type:String,required:true},
    img:{type:String,required:true,unique:true},
    description:{type:String,required:true},
    options:{type:Array,required:true},
}))

const Category=mongoose.model("Category",Schema({
    CategoryName:{type:String,required:true},
    
}))
/* async function fetchFood(){
    const client = await mongoose.connect(
        'mongodb+srv://gowtham:ISKiEd26F9jnQYlK@cluster0.cmkfkuw.mongodb.net/FoodOrderDb?retryWrites=true&w=majority'
      )
      const db = client.db();
    
      const foodsCollection = db.collection("foods")
      const foods=await foodsCollection.find().toArray()
 return foods
} */


module.exports={Food,Category}