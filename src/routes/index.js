const Router=require('express').Router();
const user=require('./user');

Router.use(user); //handel auth routes 

module.exports=Router;