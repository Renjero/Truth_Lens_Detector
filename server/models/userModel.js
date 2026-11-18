import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name :{
        type : String, 
        required : [true , "Please Enter Your Name!"]
    },
    email :{ 
        type : String, 
        required : [true , "Please Enter Your Email !"],
        unique : true
    },
    phone : { type : String, 
        required : [true , "Please Enter Your Phone Number !"],
        unique : true
    },
   password: {
    type: String,
    required: [true, "Please Enter Your Password!"],
},
    age : {
        type : Number, 
    },
    gender : {
        type : String, 
        // enum : ["male","female"],
        //  required : [true , "Please Enter Your Gender !"],
    },
    address : {
         type : String
    },
    userType : {
         type : String, 
        enum: ["USER", "DOCTOR", "PATHOLOGIST", "ADMIN"],
            default : "USER",
        //  required : [true , "Please SELECT YOUR ROLE !"],
    },
    isActive : {
        type : Boolean,
        default : true,
        // required : true
    },

},{
    timestamps : true
})



const User = mongoose.model("User" , userSchema)


export default User