const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "watch_store"
});

db.connect(err => {
    if(err){
        console.log(err);
    }else{
        console.log("Database Connected");
    }
});

app.get("/watches",(req,res)=>{
    db.query("SELECT * FROM watches",(err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.json(result);
        }
    });
});

app.listen(3000,()=>{
    console.log("Server Running On Port 3000");
});