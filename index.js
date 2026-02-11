import express from "express";
import menuroute from "./routes/menu.js";
import dotenv from "dotenv"
dotenv.config() ;
import buffetRouter from "./routes/buffetRouter.js"
const app = express();
const port = process.env.PORT ;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("pages/index", { title: "Indian Bistro - Home" });
});
app.use("/buffet", buffetRouter)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.use("/menu", menuroute);
