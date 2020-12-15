const Router=require('express').Router();
const user=require('./user');
const post=require('./post')

Router.use(user);
Router.use(post);

module.exports=Router;