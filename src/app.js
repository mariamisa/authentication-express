const env = require('env2')('./config.env');
const express= require('express');
const router=require('./routes');
const {client,server}=require('./controller/error')
const {join}=require('path');
const cookieParser = require('cookie-parser');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

//handel static file 
app.use(express.static(join(__dirname, '..', 'public')));

app.use(router);

app.use(client); //client error
app.use(server); // server error

module.exports=app;