import express from "express";

import menuData from "../data/menuData.js";
const menurouter = express.Router();


menurouter.get("/", (req, res) => {
  res.render("pages/menu", { 
    title: "Menu",        
    subtitle: "Authentic Flavors",
    menu: menuData,
    pageTitle: "Menu",
    pageFooter: "&copy; TheIndianBistro | All Rights Reserved | 2026"
  });
});

menurouter.get("/:category", (req, res) => {
    const category = req.params.category; 
    const items = menuData[category] || menuData[category + "Items"]; 

    res.render("pages/categoryList", { 
        pageTitle: `${category.replace('Items', '')} Menu | Indian Bistro`, 
        title: category.replace('Items', ''),
        subtitle: "Fresh & Authentic",
        items: items,
        pageFooter: "&copy; TheIndianBistro | All Rights Reserved | 2026"
    });
});

export default menurouter;