const express = require("express");
const router = express.Router();
const userController = require('../controller/userController');

router.get('/getUsers', userController.getUsers);
router.get('/getUserInfo/:id', userController.getUserInfo);
router.post('',userController.insertUser);

module.exports = router;