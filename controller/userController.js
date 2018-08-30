let userService = require('../service/userService')

module.exports.getUserInfo = async (req,res) => {
    let userid = req.params.id;
    let userInfo = await userService.getUserInfo(userid);
    res.send(userInfo);
};

module.exports.getUsers = async (req,res) => {
    let users= await userService.getUsers();
    res.send(users);
}

module.exports.insertUser = async (req,res) => {
    const postData = req.body;
    let insertResult = await userService.insertUser(postData);
    res.send(insertResult);
}

module.exports.updateUser = async (req,res) => {
    const putData = req.body;
    let updateResult = await userService.updateUser(putData);
    res.send(updateResult);
}

module.exports.deleteUser = async (req,res) => {
    const deleteData = req.params.id;
    let deleteResult = await userService.deleteUser(deleteData);
    res.send(deleteResult);
}