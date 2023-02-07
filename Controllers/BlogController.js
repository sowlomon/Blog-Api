import Blog from "../Model/Blog.js";


export const getAllBlogs = async(req, res, next) => {
  let allBlogs;

  try {
    allBlogs = await Blog.find();

  }catch(err) {
    return console.log(err);
  };

  if(!allBlogs) {
    return res.status(400).json({ message: "No blog has being FOUND!"});
  };

  return res.status(200).json({ allBlogs});
};