const createUser = require('./createuser');
const {login,logout}=require('./login');
const {postPage,createNewPost,getPostsUser}=require('./posts')


module.exports={createUser,login,logout,postPage,createNewPost,getPostsUser}