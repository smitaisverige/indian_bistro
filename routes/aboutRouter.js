import express from "express";
import aboutData from "../data/aboutData.js";
import * as path from "node:path";

const router = express.Router();
const __dirname = path.resolve();

// Route for About Us page

router.get("/", (req, res) => {
  const data = {
    aboutSections: {
      essence: {
        title: "Our Essence",
        content: "Authentic Indian flavors with modern touch.",
      },
    },
  };

  res.render("pages/about", { data: aboutData });
});

export default router;
