import express from "express";
import dotenv from "dotenv";
import menuroute from "./routes/menu.js";
import buffetRouter from "./routes/buffetRouter.js";
import aboutRouter from "./routes/aboutRouter.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("pages/index", { title: "Indian Bistro - Home" });
});
app.use("/buffet", buffetRouter);
app.use("/about", aboutRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.use("/menu", menuroute);
