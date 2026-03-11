import mongoose from "mongoose";

export const connectDB = async () => {

  await mongoose
    .connect(
      "mongodb+srv://vinitmule:mulevinit32@cluster0.4c4qa.mongodb.net/food-del",
    )
    .then(() => {
      console.log("DB Connected");
    });
};

// "mongodb+srv://vinitmule:mulevinit32@cluster0.4c4qa.mongodb.net/food-del?retryWrites=true&w=majority"
