import express from "express"
import { getAllBlogs } from "../Controllers/BlogController.js";

const BlogRouter= express.Router();

BlogRouter.get("/", getAllBlogs);

export default BlogRouter;