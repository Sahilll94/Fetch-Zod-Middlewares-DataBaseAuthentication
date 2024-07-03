const express=require('express');

const zod=require("zod"); //Imported zod library.

const app=express();

const schema=zod.array(zod.number());

//WAY TO USE ZOD FOR ERROR VALIDATION
//Suppose you want user to input this only.
// {
//     email: string
//     password: atleast 8 letters
//     country: "IN", "US"
// }

//for the above we can do.
// const schema=zod.object({
//     email:zod.string(),
//     password:zod.string(),
//     country:zod.literal("IN").or(zod.literal("US"))
// })

const port=3000;

app.use(express.json());

app.post('/health-checkup', function(req, res){
    const kidneys=req.body.kidneys;
    const response=schema.safeParse(kidneys);

    if(!response.success){
        res.status(400).json({
            message:"Wrong Input of kidney."
        })
    }
    else{{
        const kidneyLength=kidneys.length;
        if(kidneyLength>2){
            res.status(411).json({
                message:"Humans have only 2 kidneys!"
            });
        }
        else{
        res.send("you have "+ kidneyLength+ " Kidneys.");
        }
    }}
})

app.listen(port);
console.log("Server is listening at port: "+port);