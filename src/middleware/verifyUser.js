const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const {getUser}=require('../database/queries/user');

const verifyPassword=(req,res,next)=>{
    const {email,password}=req.body;
    getUser(email).then(({rows})=>{
        bcrypt.compare(password, rows[0].password, (error, result) =>{
          if (!result) {
              const error= new Error()
              error.msg='incorrect password';
              error.status=401;
              next(error)
          }
          else{
             const token= jwt.sign({ id:rows[0].id },process.env.SECRET_KEY);
             res.cookie('token',token, { maxAge: 900000, httpOnly: true });
             next();
          }
        });
    })
}

module.exports=verifyPassword