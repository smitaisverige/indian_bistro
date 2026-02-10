import express from "express";
import menuroute from "./routes/menu.js";
import dotenv from "dotenv"
dotenv.config() ;

const app = express();
const port = process.env.PORT ;


app.set("view engine", "ejs");
app.use(express.static("public"));


app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.use("/menu", menuroute);