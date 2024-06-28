var express = require('express');
var cors = require('cors');
require('./connection');
const user=require('./model/user')

var app=express();
app.use(express.json());
app.use(cors());
app.get('/add',(req,res)=>{
    res.send("hello");
})
app.get('/login',(req,res)=>{
    res.send("You have logged in successfully");
})

app.post('/add',async(req,res)=>{

    try {

        console.log(req.body);
        await user(req.body).save()
        res.send({message:"data added sucessfully!!!"})//messsage to display 
    } catch (error) {
        console.log(error)
    }

})
app.get('/view',async(req,res)=>{
    try {
       
        const data=await user.find();
        res.send(data);
        
    } catch (error) {
        console.log(error);
    }
})

app.delete('/remove/:id',async(req,res)=>{
    try {
        console.log(req.params.id);
        var data=await user.findByIdAndDelete(req.params.id);
        res.send({message:"deleted successfully"})
        
    } catch (error) {
        console.log(error)
    }
})

app.put('/edit/:id',async(req,res)=>{
    console.log("up")
    try {
        var data=await user.findByIdAndUpdate(req.params.id,req.body);
        res.send({message:'updated successfully',data})
    } catch (error) {
        console.log(error)
    }
})



app.listen(3000,()=>{
    console.log("port is up and running")
})
