const express=require('express');

const app=express();

const port=3000;

app.use(express.json());


app.post('/health-checkup', function(req, res){
    const kidneys=req.body.kidneys;
    const KidneyLength=kidneys.lengsth;

    res.send("You have "+KidneyLength+" kidneys");
})

app.use(function(err,req,res,next){         //We can call it at last everytime, We have use to show a message to the client or end-user so that they don't see the gibberish internal error on their screen.
    res.json({
        message:"Something is wrong with our server!"
    })
})

app.listen(port);