import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  tittle: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  }
})

export default mongoose.model("Blog", BlogSchema);