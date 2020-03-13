const Router=require('express').Router();
const {createUser,login,posts,logout}= require('../controller');
const {signValidation,loginValidation}=require('../middleware/validation');
const {emailNotExist,emailExist}=require('../middleware/checkEmail');
const verifyPassword=require('../middleware/verifyUser');
const {protected,loginPro}=require('../middleware/protectRoute');
const authPage=require('../controller/authPage');

Router.post('/create-user',signValidation,emailNotExist,createUser) //signup
Router.post('/login',loginValidation,emailExist,verifyPassword,login) //login
Router.get('/auth',loginPro,authPage) //login or signup page
Router.get('/posts',protected,posts) //posts page
Router.get('/logout',logout) //logout

module.exports=Router