const client=(req,res,next)=>{
    res.status(404).json({msg:'page not found'})
  }
const server=(error,req,res,next)=>{
      res.status(error.status || 500).json({ msg: error.msg, status: error.status });
  }

module.exports={
    client,server
}