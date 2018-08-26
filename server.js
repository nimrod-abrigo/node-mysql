let express = require('express');
let app = express();
let bodyparser = require('body-parser');

//routes
let userroute = require('./routes/user');

app.use(bodyparser.urlencoded({ extended: false }))

app.use('/user',userroute);

app.listen(4000,()=>console.log('gumana ang node server'));