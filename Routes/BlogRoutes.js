import express from "express"
import { addBlog, deleteBlog, getAllBlogs, getBlogs, getById, updateBlog } from "../Controllers/BlogController.js";

const BlogRouter= express.Router();

BlogRouter.get("/", getAllBlogs);
BlogRouter.post("/add", addBlog);
BlogRouter.put("/update/:id", updateBlog);
BlogRouter.get("/:id", getById);
BlogRouter.delete("/delete/:id", deleteBlog);
BlogRouter.get("/user/:id", getBlogs);

export default BlogRouter;