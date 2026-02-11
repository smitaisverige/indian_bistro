import express from "express";
import menuroute from "./routes/menu.js";
import dotenv from "dotenv"
dotenv.config() ;

dotenv.config();
const app = express();
const port = process.env.PORT ;


app.set("view engine", "ejs");
app.use(express.static("public"));


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.use("/menu", menuroute);
