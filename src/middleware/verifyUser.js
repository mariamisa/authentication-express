//check if password correct
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const {getUser}=require('../database/queries/user');

const verifyPassword=(req,res,next)=>{
    getUser(req.body.email).then(Result=>{
        bcrypt.compare(req.body.password, Result.rows[0].password, function(error, result) {
          if (result===false) {
              //if password false
              const error= new Error()
              error.msg='incorect password';
              error.status=401;
              next(error)
          }
          else{
              //if true create cookies /get id for ths email
             const token= jwt.sign({ id: Result.rows[0].id },process.env.SECRET_KEY);
             res.cookie('token',token);
             next();
          }
        });
    })
}

module.exports=verifyPassword