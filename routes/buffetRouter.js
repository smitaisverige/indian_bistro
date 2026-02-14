import express from "express";
import { weeklyBuffet, otherItems} from "../data/buffetData.js" 

const buffetRouter = express.Router();

buffetRouter.get("/", (req, res) => {
  const dayName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][new Date().getDay()];
  res.render("pages/featured",
        {
            weeklyBuffet: weeklyBuffet,
            todaysWeekDay: dayName,
            description: "Our carefully curated tasteful Buffet",
            page:"buffet",
            otherItems:otherItems
        });
});
export default buffetRouter;
