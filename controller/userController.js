let userService = require('../service/userService')

module.exports.getUserInfo = (req,res) => {
    let userid = req.params.id;
    userService.getUserInfo(userid,function(err,result){
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });
}

module.exports.getUsers = (req,res) => {
    userService.getUsers(function(err,result){
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });
}

module.exports.insertUser = (req,res) => {
    const postData = req.body;
    userService.insertUser(postData, function(err,result){
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });
}