const mongoose = require ('mongoose')
const schema = mongoose.Schema({

    id:Number,
    name:String,
    age:Number,
    email:String

})//exportmodel 

const userModel= mongoose.model("user",schema);
module.exports=userModel;