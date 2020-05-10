const express = require("express");
const todoroute = require("./routes/todos.js")

const server = express();

server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.get('/hello',(req,res)=>{
    res.send("hello");
})

server.use('/public', express.static(__dirname +'/public'))

server.use('/todos',todoroute);


server.listen(4444);