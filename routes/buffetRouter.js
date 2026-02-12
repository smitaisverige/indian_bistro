import express from "express";
import * as path from "path";
import { weeklyBuffet } from '../data/buffetData.js';

const buffetRouter = express.Router();
const __dirname = path.resolve();

buffetRouter.get("/", (req, res) => {
    const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];
    const todayMenu = weeklyBuffet[dayName] || null;
    
    res.render(
        path.join(__dirname, "/views/pages/featured"),
        {
            todayBuffet: todayMenu,
            weekBuffet: weeklyBuffet,
            todaysWeekDay: dayName,
            description: "Our carefully curated tasteful Buffet",
            pageType: "Buffet",
            page: "buffet",
            mealType: "both"  // Shows both lunch and dinner
        }
    );
});

export default buffetRouter;