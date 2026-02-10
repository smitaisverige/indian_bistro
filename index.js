import express from "express";
import ejs from "ejs";

const app = express();
const port = 3070;


app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
