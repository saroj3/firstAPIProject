import express from "express";
import bodyParser from "body-parser";
var app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

let user =['suman', 12]

app.get("/user",(req,res)=>{
    res.send(user)
})
app.listen(3000,(req, res) =>{
    console.log('server is running on 3000');
})
