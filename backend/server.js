import express from "express";
import { connect } from "mongoose";
import { json } from "body-parser";
import cors from "cors";
import postRoutes from "./routes/posts";

const app = express();
const PORT = 5000; //process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(json());
app.use("/api/posts", postRoutes);

// MongoDB connection
connect("mongodb://localhost:27017/personal_blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Define a simple route
app.get("/", (req, res) => res.send("Welcome to the Personal Blog API"));

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
