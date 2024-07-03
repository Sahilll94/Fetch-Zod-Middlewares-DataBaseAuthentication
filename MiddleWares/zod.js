const zod=require("zod");

function ValidateInput(arr){

    const schema=zod.array(zod.number());       //It says that the input should be an array with numbers only.

    const response=schema.safeParse(arr);

    console.log(response);
}

ValidateInput([1,2,3,4,"sahil"])