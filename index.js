import express from "express";
import ejs from "ejs";

const app = express();
const port = 3070;


app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Welcome to the Indian Bistro")
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});