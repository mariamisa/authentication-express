const login=(req,res)=>{
 res.redirect('/post-page')
}
const logout=(req,res)=>{
    res.clearCookie('token').redirect('/');
}
module.exports={login,logout};