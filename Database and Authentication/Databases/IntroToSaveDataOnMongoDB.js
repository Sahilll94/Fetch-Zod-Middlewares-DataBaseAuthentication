const mongoose=require("mongoose");

mongoose.connect("yourURL/UserData");  //"UserData", it is the name of the DataBase where you will be storing your data.

const User=mongoose.model('Users',{name:String, email:String, password:String});    //"Users", here as you can see this is the collection Name (Table) name.

//We created a new instance from const User to save the data and only once at a time can be saved.
const user1= new User({
    name:"Sahil kumar yadav", 
    email:"sahilk64323555@gmail.com",
    password:"2211032020009"
}); 

//Another instance to save another data of the user.
const user2= new User({
    name:"Rishi",
    email:"Rishi23@gmail.com",
    password:"12345602930"
})

const user3=new User({
    name:"Ishita",
    email:"Ishita29@gmail.com",
    password:"12345"
})

//DON'T FORGET TO SAVE THE INSTANCES OR ELSE IT WON'T BE SAVED IN THE DATABASE'S COLLECTIONS.
user1.save();

user2.save();

user3.save();
