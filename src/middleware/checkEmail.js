const {getUser}= require('../database/queries/user');

const emailNotExist = (req,res,next)=>{
  getUser(req.body.email).then(result=>{
      if(result.rows.length===0){next()}
      else{
        const error = new Error();
        error.msg = 'email already taken';
        error.status = 400;
        next(error);
      }
  }).catch(next)
}

const emailExist=(req,res,next)=>{
  getUser(req.body.email).then(result=>{
    if (result.rows.length!==0) {next()}
    else{
      const error=new Error()
      error.msg='email dosent exists';
      error.status=400;
      next(error)
    }
  })
}

module.exports={emailNotExist,emailExist}