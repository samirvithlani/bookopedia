const router = require('express').Router();
const roleController = require('../controllers/RoleContoller');

router.get('/getRoles',roleController.getRoles)
router.post('/addRoles',roleController.addRoles)

module.exports=router;