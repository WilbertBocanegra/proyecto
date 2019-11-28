const path = require('path')
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const sessions = require('express-session')
const app = express();
//connecting to db
mongoose.connect('mongodb://localhost/secundaria')
.then(db => console.log("Db connected"))
.catch(err => console.log(err))
//importing routes
const indexRoutes = require('../www/js/route.js');
//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'pages'));
app.set('view engine','ejs');
//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(sessions({
    secret:'1234567890',
    resave:false,
    saveUninitialized:false
}));
// routes
app.use('/',indexRoutes);

//starting the server
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`)
    console.log(app.get('views'))
})
