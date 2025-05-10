import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const port = process.env.PORT || 4000;
const app = express();

app.use(cookieParser);
app.use(
  cors({
    origin: "process.env.BASE_URL",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {});

app.listen(port, () => {
  console.log(`Backend is listening at port: ${[port]}`);
});
