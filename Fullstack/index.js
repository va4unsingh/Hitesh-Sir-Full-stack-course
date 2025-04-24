import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Vader!");
});

app.get("/hitesh", (req, res) => {
  res.send("HitesSirOp!");
});

console.log(process.env.PORT);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
