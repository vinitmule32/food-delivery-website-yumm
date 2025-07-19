import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://vinitmule:vinitmule123@cluster0.4c4qa.mongodb.net/food-del').then(()=>console.log("DB Connected"));
//    mongodb+srv://vinitmule:<db_password>@cluster0.4c4qa.mongodb.net/

}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.