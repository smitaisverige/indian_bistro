import express from "express";

import menuData from "../data/menuData.js";
const menurouter = express.Router();


menurouter.get("/", (req, res) => {
  res.render("pages/menu", { 
    page: "menu",
    title: "Menu",        
    menu: menuData,
    pageTitle: "Menu"
    
  });
});

menurouter.get("/:category", (req, res) => {
    const category = req.params.category; 
    const items = menuData[category] || menuData[category + "Items"]; 

    res.render("pages/categoryList", { 
        page: "menu",
        pageTitle: `${category.replace('Items', '')} Menu | Indian Bistro`, 
        title: category.replace('Items', ' '),     
        items: items,
        
    });
});

export default menurouter;