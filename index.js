import express from "express";
var app = express();
//changes
app.listen(3000,(req, res) => {
console.log('server is runnig on 3000');
})