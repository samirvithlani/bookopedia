const router = require('express').Router();
const userController = require('../controllers/UserController');

router.get('/getUsers',userController.getUsers)
router.get('/getUser/:id',userController.getUserById)
router.post('/addUser',userController.addUsers)
router.put('/updateUser/:id',userController.updateUser)
router.delete('/deleteUser/:id',userController.deleteUserById)

module.exports=router;