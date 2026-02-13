import express from "express";
import { weeklyLunchBuffet, weeklyDinnerBuffet, otherItems } 
  from '../data/weeklyBuffetData.js';

const buffetRouter = express.Router();

function buildPayload(mealType = "both") {
    const dayName = [
        'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday' ][new Date().getDay()];
    return {
        weeklyLunchBuffet,
        weeklyDinnerBuffet,
        otherItems,
        todaysWeekDay: dayName,
        description: "Our carefully curated tasteful Buffet",
        pageType: "Buffet",
        mealType,
        page: "buffet"   
    };
}


buffetRouter.get("/", (req, res) =>
  res.render("pages/featured", buildPayload("both"))
);

buffetRouter.get("/lunch", (req, res) =>
  res.render("pages/featured", buildPayload("lunch"))
);

buffetRouter.get("/dinner", (req, res) =>
  res.render("pages/featured", buildPayload("dinner"))
);

export default buffetRouter;
