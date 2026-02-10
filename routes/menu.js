import express from "express";
import * as path from "path";
import menuData from "../data/menuData.js";
const menurouter = express.Router();

const __dirname = path.resolve();
menurouter.get("/", (req, res) => {
  res.render(path.join(__dirname, "/views/pages/menu"),{
    title:"Menu",        
    subtitle: "Authentic Flavors",
    menu: menuData,
    pageTitle: "Menu",
    pageFooter: "&copy; TheIndianBistro | All Rights Reserved | 2026"
    
  });
});

export default menurouter;