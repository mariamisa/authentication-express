const bcrypt = require('bcrypt');
const {signUp}=require('../database/queries/user')
const createUser=(req,res,next)=>{
    bcrypt.hash(req.body.password, 10, (error, hashPassword)=> {
        if (error) {next(error)}
        else{
            const userInfo = {
                name:req.body.name,
                email:req.body.email,
                password:hashPassword
            }
            signUp(userInfo).then((Result) =>
            res.json({ msg: `signed up successfuly welcome ${Result.rows[0].name} / ${Result.rows[0].email}`}))
            .catch(next);
        }   
    });
}

module.exports=createUser;