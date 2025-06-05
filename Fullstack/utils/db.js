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

// with try catch await
// const db = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log("✅ Connected to MongoDB");
//   } catch (err) {
//     console.error("❌ Error connecting to MongoDB:", err.message);
//     process.exit(1); // Exit the process with failure
//   }
// };

export default db;
