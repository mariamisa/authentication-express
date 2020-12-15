const app =require('./app');
const PORT=process.env.PORT||4000;

app.listen(PORT,()=>{
    console.log(`you are listen to the post http://localhost:${PORT}`);
})