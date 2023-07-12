const roleSchema = require('../models/RoleSchema');

const getRoles = (req,res) => {
    roleSchema.find().then((data) => {
        res.status(200).json({
            message:"Role data loaded successfully",
            data:data
        })
    }).catch((err) => {
        res.status(500).json({
            message:"Error in displaying the roles",
            error:err,
        })
    })
} 


const addRoles = (req,res) => {
    const role = new roleSchema(req.body)
    role.save().then((data) =>{
        res.status(200).json({
            message:"Roles added successfully into the database",
            data:data,
        })
    }).catch((err) =>{
        res.status(500).json({
            message:"Error in adding roles in db",
            error:err,
        })
    })
}

module.exports={getRoles,addRoles};