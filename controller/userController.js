let userService = require('../service/userService')

module.exports.getUserInfo = (req,res) => {
    res.send(req.params.id)
}

module.exports.getUsers = (req,res) => {
    /*connection.query("SELECT * FROM users", function(error, rows, fields){
        if(error){
            res.send(error);
        }else{
            res.send(rows);
        }
    });*/
    res.send(userService.getUsers());
}