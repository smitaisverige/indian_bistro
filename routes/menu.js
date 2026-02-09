import express from "express";
import * as path from "path";
const menurouter = express.Router();

const __dirname = path.resolve();
menurouter.get("/", (req, res) => {
  res.render(path.join(__dirname, "/views/pages/menu"),{
    title: "Our Menu",            
    subtitle: "Authentic Flavors",
    pageTitle: "Menu",
    pageFooter: "&copy; Chaitali | All Rights Reserved | 2026"
    
  });
});

export default menurouter;