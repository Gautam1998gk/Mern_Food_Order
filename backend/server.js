const express=require("express")
const mongoose =require("mongoose")
const cors=require("cors")
const PORT=5000;
const app=express()

app.use(cors())
app.use(express.json())
require('dotenv').config()
//app.use(express.urlencoded({extended:true}))


mongoose.connect("mongodb+srv://gowtham:ISKiEd26F9jnQYlK@cluster0.cmkfkuw.mongodb.net/FoodOrderDb?retryWrites=true&w=majority")
.then(dbres=>console.log("Db connected"))
.catch(err=>console.log("connection Err:",err))



app.get("/",(req,res)=>{
    res.send("hello from me")
})

app.use("/api",require("./routes/userRoutes"))
app.use("/foods",require("./routes/foodsRoutes"))

app.get("/foods",async(req,res)=>{
  const client=await  mongoose.connect('mongodb+srv://gowtham:ISKiEd26F9jnQYlK@cluster0.cmkfkuw.mongodb.net/FoodOrderDb?retryWrites=true&w=majority')
      
      const foodsCollection =await client.connection.collection("foods")
      console.log(await foodsCollection.find().toArray());
      const foods=await foodsCollection.find().toArray()
      res.send({foods:foods})
})

app.listen(PORT,"localhost",(err)=>{
    if(err) console.log("Error",err);
    else console.log("server is running on localhost 5000");
})
