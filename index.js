import express from "express";
import ejs from "ejs";
import homeRoutes from "./routes/home.js";
const app = express();
const port = 3070;


app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("pages/index", { title: "Indian Bistro - Home" });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
