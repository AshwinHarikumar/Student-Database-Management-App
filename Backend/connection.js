const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://mail:<password>@cluster0.pwlfnet.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected successfully")
})
.catch((error)=>{
    console.log("error detected")
})
