import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

// export a function that connect to DB

const db = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("connected to mongo DB");
    })
    .catch((err) => {
      console.log("Error connecting to mongo DB");
    });
};

export default db;
