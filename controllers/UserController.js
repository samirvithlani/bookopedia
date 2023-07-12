const userSchema = require('../models/UserSchema');

const getUsers = (req,res) => {
    userSchema.find().populate("roleId").then((data) => {
        res.status(200).json({
            message:"User data loaded successfully",
            data:data
        })
    }).catch((err) => {
        res.status(500).json({
            message:"Error in displaying the Users",
            error:err,
        })
    })
} 

const addUsers = (req,res) => {
    const user = new userSchema(req.body)
    user.save().then((data) =>{
        res.status(200).json({
            message:"Users added successfully into the database",
            data:data,
        })
    }).catch((err) =>{
        res.status(500).json({
            message:"Error in adding Users in db",
            error:err,
        })
    })
}

const getUserById = (req,res) => {
    userSchema.findById(req.params.id).populate("roleId").then((data) => {
        res.status(200).json({
            message:"User details found successfully",
            data:data,
        })
    }).catch((err) => {
        res.status(500).json({
            message:"Error in retrieving the user details",
            error:err,
        })
    })
}

const deleteUserById = (req,res) => {
    userSchema.findByIdAndDelete(req.params.id).then((data) => {
        res.status(200).json({
            message:"User deleted successfully",
            data:data,
        })
    }).catch((err) => {
        res.status(500).json({
            message:"Error in deleting the user",
            error:err,
        })
    })
}

const updateUser = (req,res) => {
    userSchema.findByIdAndUpdate(req.params.id,req.body).then((data) => {
        res.status(200).json({
            message:"User updated",
            data:data,
        })
    }).catch((err) => {
        res.status(500).json({
            message:"Error while updating the users details",
            error:err,
        })  
    })
}

module.exports={ getUsers,addUsers, getUserById, deleteUserById,updateUser };
