const bcrypt = require('bcrypt');
const {signUp}=require('../database/queries/user')
const createUser=(req,res,next)=>{
    const {name,email,password} =req.body;
    bcrypt.hash(password, 10, (error, hashPassword)=> {
        if (error) {next(error)}
        else{
            const userInfo = {
                name,
                email,
                password:hashPassword
            }
            signUp(userInfo).then(({rows}) =>
            res.json({ msg: `signed up successfully welcome ${rows[0].name} / ${rows[0].email}`}))
            .catch(next);
        }   
    });
}

module.exports=createUser;