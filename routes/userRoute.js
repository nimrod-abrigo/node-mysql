const express = require("express");
const router = express.Router();
const userController = require('../controller/userController');

router.get('/getUsers', userController.getUsers);
router.get('/getUserInfo/:id', userController.getUserInfo);
router.post('',userController.insertUser);
router.put('/:id',userController.updateUser);
router.delete('/:id',userController.deleteUser);

module.exports = router;