const express = require("express");
const router = express.Router();
const connection = require('../db');
const userController = require('../controller/userController');

router.get('/getUsers', userController.getUsers);
router.get('/getUserInfo/:id', userController.getUserInfo);

module.exports = router;