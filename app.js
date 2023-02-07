import express from "express";
import mongoose from "mongoose";
import BlogRouter from "./Routes/BlogRoutes.js";
import router from "./Routes/userRoutes.js";
const app = express();

app.use(express.json());

app.use("/api/user", router);
app.use("/api/blog", BlogRouter);


const PORT = 3000;

mongoose.connect(
  "mongodb+srv://admin:Go2sehim@cluster0.kcigvv4.mongodb.net/?retryWrites=true&w=majority"
).then(() => app.listen(PORT)).then(() => console.log("App is Listening to MongoDB")).catch((err) => {
  console.log(err);
});







// app.use('/', (req, res, next) => {
//   console.log("listening");
//   res.end("Welcome to the backend side of this app")
//   next();
// });

// app.listen(PORT);