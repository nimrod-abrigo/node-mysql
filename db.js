let mysql = require('mysql');

let connection = mysql.createConnection({
    //properties
    host:'localhost',
    user:'root',
    password:'',
    database:'sampleDB'
});

connection.connect(function(error){
    if(error){
        console.log("error");
    }else{
        console.log("connected on Db");
    }
});

module.exports= connection;