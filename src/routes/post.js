const Router=require('express').Router();
const {postPage,createNewPost,getPostsUser}= require('../controller');
const {protected}=require('../middleware/protectRoute');



Router.get('/posts',protected,postPage) //posts page

Router.post('/posts',protected,createNewPost) //create nwe post

Router.get('/postDisplay',protected,getPostsUser) //display posts for login user


module.exports=Router
