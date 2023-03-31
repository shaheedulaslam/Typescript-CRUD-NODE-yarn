import mongoose from "mongoose";
const userSchema  = new mongoose.Schema({

name:{
    type:String,
 
},
place:{
    type:String,
  
},
age:{
    type:Number,
    
}


})

export const Usermodel = mongoose.model("user",userSchema)
