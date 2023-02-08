import express from "express"
import { addBlog, getAllBlogs, updateBlog } from "../Controllers/BlogController.js";

const BlogRouter= express.Router();

BlogRouter.get("/", getAllBlogs);

BlogRouter.post("/add", addBlog);
BlogRouter.put("/update/:id", updateBlog);



export default BlogRouter;