import express from "express";
import { getAllUsers, signUp } from "../Controllers/UserController.js";

const router = express.Router();

router.get("/",getAllUsers);

router.post("/signup", signUp);


export default router;