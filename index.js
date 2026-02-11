import express from "express";
import ejs from "ejs";
import dotenv from "dotenv"

dotenv.config();
const app = express();
const port = process.env.PORT;


app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("pages/index", { title: "Indian Bistro - Home" });
});

app.get("/test", (req, res) => {
  res.send("Welcome to the Indian Bistro")
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
