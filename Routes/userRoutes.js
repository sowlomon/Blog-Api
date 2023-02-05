import express from "express";
import { getAllUsers, Login, signUp } from "../Controllers/UserController.js";

const router = express.Router();

router.get("/",getAllUsers);

router.post("/signup", signUp);

router.post("/login",Login);


export default router;