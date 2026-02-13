import express from "express";

import menuData from "../data/menuData.js";
const menurouter = express.Router();


menurouter.get("/", (req, res) => {
  res.render("pages/menu", { 
    title: "Menu",        
    menu: menuData,
  });
});

menurouter.get("/:category", (req, res) => {
    const category = req.params.category; 
    const items = menuData[category] ; 

    res.render("pages/categoryList", { 
        page: "menu",
        pageTitle: `${category} Menu | Indian Bistro`, 
        title: `${category}`,     
        items: items,
        
    });
});

export default menurouter;