const express = require("express");

const port = 3000;

const app = express();


app.get('/health-checkup', function(req, res){
    //Dumb-way of doing middlewares authentications.

    const username=req.headers.username;
    const password=req.headers.password;
    const Kidney=req.query.Kidney;

    if(username!="sahil" || password!="pass"){
        res.status(400).json({
            message:"Wrong credentials!"
        })
    }
    else if(Kidney!=1 && Kidney!=2){
        res.status(400).json({
            message:"Wrong number of kidney!"
        })
    }
    else{
        res.json({
            message:"Your kidneys are safe."
        })
    }

})

app.listen(port);