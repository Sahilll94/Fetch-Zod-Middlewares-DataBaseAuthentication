const express=require("express");

const app=express();

const port = 3000;

function CredentialsChecker(req, res, next){
    const username=req.headers.username;
    const password=req.headers.password;
    //Dumb-Way to verify it.
    if(username!="sahil" || password!="pass")
    {
        res.status(400).json({
            message:"Wrong Credentials!"
        })
    }
    else{
        next();
    }
}

function KidneyNumbersChecker(req,res,next){
    const kidney=req.query.kidney;
    if(kidney!=1 && kidney!=2){
        res.status(400).json({
            message:"Kidney input is not valid!"
        })
    }
    else{
        next();
    }
}
// app.use(CredentialsChecker);     you can use it so that you don't need to call this function at every route that you are writing if it is being used in every route COMMONLY.

app.get('/health-checkup', CredentialsChecker, KidneyNumbersChecker, function(req,res){
    res.send("Your are safe.")
})

app.get('/kidney-checkup', CredentialsChecker, KidneyNumbersChecker, function(req,res){
    res.send("Your kidney is safe")
})

app.get('/Heart-Checkup', CredentialsChecker, function(req,res){
    res.send("Your heart is safe.")
})

app.listen(port);