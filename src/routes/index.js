const Router=require('express').Router();
const user=require('./user');
const post=require('./post')

Router.use(user); //handel auth routes 
Router.use(post);//handel post routes

module.exports=Router;