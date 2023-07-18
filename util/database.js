const mysql=require('mysql2');
const pool=mysql.createPool({
    host:'localhost',
    root:'user',
    database:'node',
    password:'BINDU@2001#123'
});
module.exports=pool.promise();

