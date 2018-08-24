const express = require("express");
const router = express.Router();

let userController = require('../controller/userController');

/*router.get('/getUsers', function(req,res){
    connection.query("SELECT * FROM users", function(error, rows, fields){
        if(error){
            res.send(error);
        }else{
            res.send(rows);
        }
    });
});*/
router.get('/getUsers',userController.getUsers);
router.get('/getUserInfo/:id',userController.getUserInfo);
/*router.get('/getUserInfo/:id', function(req,res){
    connection.query("SELECT * FROM users WHERE id = ?",[req.params.id],function(error,rows,fields){
        if(error){
            res.send(error);
        }else{
            res.send(rows);
        }
    });
});*/

module.exports = router;