import express from "express";
import { getUserSidebar ,searchUser,includetoChats,includetoChatspending} from "../controllers/usercountrollers.js";
import { protectRoute } from "../middlewares/protectRoute.js";

const router=express.Router();


router.get("/",protectRoute,getUserSidebar);

router.post("/search",protectRoute,searchUser);

router.get("/pendingreq/:id",protectRoute,includetoChatspending);

router.get("/acceptreq/:id",protectRoute,includetoChats);


export default router;