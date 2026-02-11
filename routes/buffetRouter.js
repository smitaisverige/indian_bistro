import express from "express";
import * as path from "path";
//import { weeklyBuffet } from '../data/buffetData.js';


const buffetRouter = express.Router();
const __dirname = path.resolve()

buffetRouter.get("/", (req, res) => {
 res.send("Welcome to Buffet page")
})

export default buffetRouter