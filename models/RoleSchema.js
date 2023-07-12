const mongoose = require('mongoose')
const Schema=mongoose.Schema;

const roleSchema= new Schema(
    {
        roleId:{
            type:Number,
            required:true
        },
        roleName:{
            type:String,
            required:true
        },
    },
    {timestamps:true}
);

module.exports=mongoose.model("roles",roleSchema);