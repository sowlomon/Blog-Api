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

export const addBlog = async ( req, res, next) => {
  const {tittle, description, image, user} = req.body;

  const blog = new Blog( {
    tittle,
    description,
    image,
    user
  })

  try {
    await blog.save()
  }catch(err) {
    console.log(err);
  };
  return res.status(200).json({blog});
}


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
