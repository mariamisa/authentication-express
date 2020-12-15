const Router=require('express').Router();
const {createUser,login,logout}= require('../controller');
const {signValidation,loginValidation}=require('../middleware/validation');
const {emailNotExist,emailExist}=require('../middleware/checkEmail');
const verifyPassword=require('../middleware/verifyUser');
const {loginPro}=require('../middleware/protectRoute');
const authPage=require('../controller/authPage');

Router.post('/create-user',signValidation,emailNotExist,createUser)
Router.post('/login',loginValidation,emailExist,verifyPassword,login) 
Router.get('/auth',loginPro,authPage)
Router.get('/logout',logout) 

module.exports=Router