const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        userId:{
            type:Number,
            required:true
        },
        firstName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            // required:true
        },
        password:{
            type:String
        }, 
        roleId:{
            type:Schema.Types.ObjectId,
            ref:'roles'
        },
        mobileNumber:{
            type:Number,
            required:true
        },
        gender:{
            type:String,
        }
    },
    {timestamps:true}
);

module.exports=mongoose.model("user",userSchema)
