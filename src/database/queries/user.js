const connection = require('../config/connection');

//to check if email exist/not
const getUser=(email)=>connection.query('SELECT * FROM users WHERE email = $1',[email])

const signUp=(data)=>{
    return connection.query('INSERT INTO users(name,email,password) VALUES($1,$2,$3) RETURNING *'
    ,[data.name,data.email,data.password])

}


module.exports={getUser,signUp}