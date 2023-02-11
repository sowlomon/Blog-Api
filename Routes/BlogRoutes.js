import express from "express"
import { addBlog, deleteBlog, getAllBlogs, getById, updateBlog } from "../Controllers/BlogController.js";

const BlogRouter= express.Router();

BlogRouter.get("/", getAllBlogs);
BlogRouter.post("/add", addBlog);
BlogRouter.put("/update/:id", updateBlog);
BlogRouter.get("/:id", getById);
BlogRouter.delete("/delete/:id", deleteBlog);

export default BlogRouter;