const express=require("express");

const zod=require("zod");

const app=express();

const port=3000;

const schema=zod.array(zod.number());

app.use(express.json());    //It will take the input data in the format of JSON only.


app.post("/health", function(req,res){
    const kidney=req.body.kidney;
    const response=schema.safeParse(kidney);
    console.log(response);

    if(!response.success){
        res.status(400).json({
            message:"Invalid user input."
        })
    }

    const kidneyLength=kidney.length;
    res.send("you have "+kidneyLength+" kidneys.");
})

app.listen(port);

