let connection = require('../db');

let getUsers = function (callback){
    connection.query("SELECT * FROM users", function(err, rows, fields) {
        if (err) return callback(err);
        return callback(rows);
    });
}

let getUserInfo = function (userid, callback){
    connection.query("SELECT * FROM users WHERE id = ?",userid, function(err, rows, fields) {
        if (err) return callback(err);
        return callback(rows);
    });
}

let insertUser = function(postData, callback){
    let postValue = [postData.name,postData.email]
    connection.query("INSERT INTO users (name,email) VALUES (?)",[postValue], function(err, rows, fields) {
        if (err) return callback(err);
        return callback(rows);
    });
}

let updateUser = function(putData, callback){
    let setData = {
        name: putData.name,
        email: putData.email
    };

    connection.query("UPDATE users SET ? WHERE id = ?",[setData,putData.id],function(err,rows,fields){
        if(err) return callback(err);
        return callback(rows);
    });
}

let deleteUser = function(deleteData, callback){
    connection.query("DELETE FROM users WHERE id = ?",[deleteData],function(err,rows,fields){
        if(err) return callback(err);
        return callback(rows);
    });
}

module.exports.getUsers = getUsers;
module.exports.getUserInfo = getUserInfo;
module.exports.insertUser = insertUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;