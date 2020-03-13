const connection = require('../config/connection');

const createPost = (data)=>{
 return connection.query('INSERT INTO posts(id_user,description) VALUES($1,$2) RETURNING *',[data.id_user,data.description])
}

const getPosts=(id)=>connection.query('SELECT * FROM posts WHERE id_user = $1',[id])


module.exports={createPost,getPosts}