const express=require("express");

const app=express();

const port=3000;

const zod=require("zod");

app.use(express.json());

function Validation(object){
    const schema=zod.object({
        email: zod.string().email(),
        password: zod.number().min(8)
    })

    return schema.safeParse(object);
} 



app.post('/UsernameAndPassword', function(req,res){
    const response=Validation(req.body);

    console.log(response);

    if(!response.success){
        res.status(400).json({
            message:"Invalid Input!"
        })
    }
    else{
        res.send("Correct input.")
    }
})

app.listen(port);