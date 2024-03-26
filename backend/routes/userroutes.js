import express from "express";
import { getUserSidebar } from "../controllers/usercountrollers.js";
import { protectRoute } from "../middlewares/protectRoute.js";

const router=express.Router();


router.get("/",protectRoute,getUserSidebar);


export default router;