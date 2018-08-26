let connection = require('../db');

let getUsers = function(){
    return new Promise(function(resolve,reject){
        connection.query("SELECT * FROM users", function(err, rows, fields) {
            if (err) return reject(err);
            return resolve(rows);
        });
    });
}

let getUserInfo = function (userid){
    return new Promise(function(resolve,reject){
        connection.query("SELECT * FROM users WHERE id = ?",userid, function(err, rows, fields) {
            if (err) return reject(err);
            return resolve(rows);
        });
    });
}

let insertUser = function(postData){
    let postValue = [postData.name,postData.email]
    return new Promise(function(resolve,reject){
        connection.query("INSERT INTO users (name,email) VALUES (?)",[postValue], function(err, rows, fields) {
            if (err) return reject(err);
            return resolve(rows);
        });
    });
}

let updateUser = function(putData){
    let setData = {
        name: putData.name,
        email: putData.email
    };
    let id = putData.id;
    return new Promise(function(resolve,reject){
        connection.query("UPDATE users SET ? WHERE id = ?",[setData,putData.id],function(err,rows,fields){
            if(err) return reject(err);
            return resolve(rows);
        });
    });
}

let deleteUser = function(userid, callback){
    return new Promise(function(resolve,reject){
        connection.query("DELETE FROM users WHERE id = ?",[userid],function(err,rows,fields){
            if(err) return reject(err);
            return resolve(rows);
        });
    });
}

module.exports.getUsers = getUsers;
module.exports.getUserInfo = getUserInfo;
module.exports.insertUser = insertUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;