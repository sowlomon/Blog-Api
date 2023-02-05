import User from "../Model/User.js";
import bcrypt from "bcryptjs";


export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find()
  }catch(err){
    console.log(err)
  }

  if(!users) {
    return res.status(404).json({ message:'no users found' })
  }
  return res.status(200).json({ users })
};


export const signUp = async (req, res, next) => {
  const {name, email, password} = req.body;

  let userDetails 
  try {
    userDetails =   await User.findOne({ email });
  }catch(err) {
    return console.log(err)
  }
  if(userDetails) {
    return res.status(404).json({ message: "users details already exists" })
  }

  const hashedPass = bcrypt.hashSync(password);

  const user = new User({
    name,
    email, 
    password : hashedPass
  })

  try{
    user.save()
  }catch(err) {
    return console.log(err)
  }
   return res.status(201).json({user})
}

export const Login = async (req, res,next) => {
  const {name, email, password} = req.body;

  let userDetails;
  try {
    userDetails =   await User.findOne({ email });
  }catch(err) {
    return console.log(err);
  }
  if(!userDetails) {
    return res.status(404).json({ message: "user does not exists" });
  };

  const isPassCorrect = bcrypt.compare(password, userDetails.password);
  
  if(!isPassCorrect) {
    return res.status(404).json({message: "password is incorrect try again!!"})
  };

  return res.status(200).json({message: "Login is successful"});
}