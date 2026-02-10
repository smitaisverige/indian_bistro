import express from "express";
import ejs from "ejs";
import buffetRouter from "./routes/buffetRouter.js"
import * as path from "path"
import 'dotenv/config'


const app = express();
const port = process.env.PORT;
const __dirname = path.resolve()

app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.send("Hello wellcome to Indian Bistro")
})

app.use("/buffet", buffetRouter)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});