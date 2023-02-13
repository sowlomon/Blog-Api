import Blog from "../Model/Blog.js";
import User from "../Model/User.js";

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


export const addBlog = async ( req, res, next) => {
  const {tittle, description, image, user} = req.body;

  let existingUser;
  
  try{
    existingUser = await User.findById(user)
  }catch(err) {
    return console.log(err)
  }
  if (!existingUser) {
    return res.status(404).json({message: "Unable to find this user"})
  }
  // return res.status(200).json(existingUser);

  const blog = new Blog( {
    tittle,
    description,
    image,
    user
  })

  try {
    const session = await mongoose.StartSession()
    session.startTransaction()
    await blog.save({session})
    existingUser.blogs.push(blog)
    await existingUser.save({session})
    await session.startTransaction()
  }catch(err) {
    console.log(err);
    return res.status(404).json({message: err})
  };
  return res.status(200).json({blog});
};

export const updateBlog = async (req, res, next) => {
  const {tittle, description, image, user } = req.body;

  const blogId = req.params.id;
  let blog;
  try{

    blog = Blog.findByIdAndUpdate(blogId, {
      tittle, 
      description 
    })
  
  }catch(err) {
    return console.log(err)
  }
  
 if(!blog) {
  return res.status(500).json({message: "Blog not Found!"})
 }
 return res.status(200).json({blog});
};

export const getById = async(req, res, next) => {
  const id = req.params.id;

  let blog;

  try {
    blog = await Blog.findById(id);

  }catch(err) {
    return console.log(err);
  };

  if(!blog) {
    return res.status(400).json({ message: "No blog with this Id was FOUND!"});
  };

  return res.status(200).json({ blog });
};

export const deleteBlog = async(req, res, next) => {
  const id = req.params.id
  let blog;

  try {
    blog = await Blog.findByIdAndDelete(id).populate("user");
    await blog.user.blogs.pull(blog)
    await blog.user.save();
  }catch(err) {
    return console.log(err);
  };

  if(!blog) {
    return res.status(400).json({ message: "Blog does not exist"});
  };

  return res.status(200).json({ message: "Blog deleted Successfully" });
};

export const getBlogs = async (req, res, next) => {
  const userId = req.params.id;
  let userBlogs;
  try {

    userBlogs = await Blog.find(userId).populate("blog");

  }catch(err) {

    return console.log(err);

  };

  if(!userBlogs) {
    return res.status(404).json({message: "Blog was not FOUND!"});
  };

  return res.status(200).json({blogs : userBlogs});
};

