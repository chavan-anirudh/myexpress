var mysql=require("mysql");

const mysqlconnection=mysql.createConnection({
    "host":"127.0.0.1",
    "user":"root",
    "password":"root",
    "port":3306,
    "database":"ani"
})

mysqlconnection.connect((err)=>{
    if(err){
        console.log("error occured"+JSON.stringify(err))
    }
    else{
        console.log("connection done");
    }
})
module.exports=mysqlconnection;