const Router=require('express').Router();
const {createUser,login,posts,logout}= require('../controller');
const {signValidation,loginValidation}=require('../middleware/validation');
const {emailNotExist,emailExist}=require('../middleware/checkEmail');
const verifyPassword=require('../middleware/verifyUser');
const {protected,loginPro}=require('../middleware/protectRoute');
const authPage=require('../controller/authPage');

Router.post('/create-user',signValidation,emailNotExist,createUser)
Router.get('/auth',loginPro,authPage)
Router.post('/login',loginValidation,emailExist,verifyPassword,login)
Router.get('/posts',protected,posts)
Router.post('/logout',logout)

module.exports=Router