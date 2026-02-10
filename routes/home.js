import express from "express";
import * as path from "path"
const homerouter = express.Router();

const __dirname = path.resolve();
homerouter.get("/", (req, res) => {
    res.render(path.join(__dirname, "/views/pages/index"), {
    page: "home", // for header nav active link
    bannerTitle: "Experience the Flavors of India",
    bannerSubtitle: "Authentic cuisine crafted with passion and tradition",
    
  });
});

export default homerouter;