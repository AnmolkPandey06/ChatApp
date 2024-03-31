import express from "express";
import { login, logout, signup ,google} from "../controllers/authcontrollers.js";

const router=express.Router();

router.post("/login",login);

router.post("/signup",signup);

router.post("/googlelogin",google);

router.get("/logout",logout);


export default router;