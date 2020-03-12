const login=(req,res)=>{
 res.redirect('/posts')
}
const logout=(req,res)=>{
    res.clearCookie('token').redirect('/');
}
module.exports={login,logout};