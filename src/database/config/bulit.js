const connection=require('./connection');
const {join}=require('path')
const {readFileSync}=require('fs');

const bulitDB=()=>connection.query(readFileSync(join(__dirname,'bulit.sql'))).toString()

module.exports=bulitDB;