const {join}=require('path')
const {createPost,getPosts}=require('../database/queries/post');

const postPage=(req,res)=>{
    res.sendFile(join(__dirname, '..', '..', 'public', 'posts.html'));

}
const createNewPost=(req,res,next)=>{
    const {description}=req.body;
    const {id:id_user} =res.user;

    const newPost={
        id_user,
        description
    }
    createPost(newPost).then(res.redirect('/post-page')).catch(next)
}

const getPostsUser=(req,res,next)=>{
    getPosts(res.user.id).then(result=>res.json(result.rows)).catch(next)
}
module.exports={postPage,createNewPost,getPostsUser}