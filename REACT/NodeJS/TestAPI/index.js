const express = require('express')
const server = express()
const port =5000

server.get('/',(request,response) => {response.json('Hello this is a server')})
const database = require('./Config/db')

server.listen(port, ()=> console.log("Server Running at port"+port))
