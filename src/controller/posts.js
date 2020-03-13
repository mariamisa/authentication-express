const {join}=require('path')
const {createPost,getPosts}=require('../database/queries/post');

const postPage=(req,res)=>{
    res.sendFile(join(__dirname, '..', '..', 'public', 'posts.html'));

}
const createNewPost=(req,res,next)=>{
    const newPost={
        id_user:res.user.id,
        description:req.body.description
    }
    createPost(newPost).then(res.redirect('/posts')).catch(next)
}

const getPostsUser=(req,res,next)=>{
    console.log(res.user.id);
    getPosts(res.user.id).then(result=>res.json(result.rows)).catch(next)
}
module.exports={postPage,createNewPost,getPostsUser}