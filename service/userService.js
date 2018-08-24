let connection = require('../db');

let getUsers = async function(){
    let result = await connection.query("SELECT * FROM users", function(error, rows, fields){
        if(error){
            return error;
        }else{
            return rows;
        }
    });
    return result;
}

module.exports.getUsers = getUsers;