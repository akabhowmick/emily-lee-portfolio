import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url"; // For ES module support for __dirname
import User from "./Models/User.js";
import pkg from "bcryptjs";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import multer from "multer";
import PostModel from "./models/Post.js";
import { renameSync } from "fs";
const { genSaltSync, hashSync, compareSync } = pkg;
import { connect } from "mongoose";

// Initialize Express
const app = express();

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use CORS to allow requests from your frontend
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

// Middleware
app.use(express.json());
app.use(cookieParser());

// Serve static files from the uploads directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// MongoDB connection
connect(
  "mongodb+srv://aka-mern-blog:IxToRGuPDCKy7k8T@cluster0.zmtej.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

// Setup Multer for file uploads
const uploadMiddleware = multer({ dest: "uploads/" });

// Secret for JWT
const secret = "asdfe45we45w345wegw345werjktjwertkj";

// Create a new post
app.post("/post", uploadMiddleware.single("file"), async (req, res) => {
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  renameSync(path, newPath);

  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const { title, summary, content } = req.body;
    const newPost = new PostModel({
      title,
      summary,
      content,
      cover: newPath,
      author: info.id,
    });
    await newPost.save();
    res.status(201).json(newPost);
  });
});

// Get all posts
app.get("/post", async (req, res) => {
  res.json(
    await PostModel.find().populate("author", ["username"]).sort({ createdAt: -1 }).limit(20)
  );
});

// Get a specific post by ID
app.get("/post/:id", async (req, res) => {
  const { id } = req.params;
  const postDoc = await PostModel.findById(id).populate("author", ["username"]);
  res.json(postDoc);
});

// Edit a specific post
app.patch("/post", uploadMiddleware.single("file"), async (req, res) => {
  let newPath = null;

  // If a new file is uploaded, update the file path
  if (req.file) {
    const { originalname, path } = req.file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    newPath = path + "." + ext;
    renameSync(path, newPath);
  }

  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const { id, title, summary, content } = req.body;

    // Find the post by ID
    const postDoc = await PostModel.findById(id);
    if (!postDoc || !postDoc.author) {
      return res.status(404).json("Post not found");
    }

    // Check if the logged-in user is the author
    const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
    if (!isAuthor) {
      return res.status(400).json("You are not the author");
    }

    // Update the post's content
    postDoc.title = title;
    postDoc.summary = summary;
    postDoc.content = content;

    // Update the cover image if a new one is uploaded
    if (newPath) {
      postDoc.cover = newPath;
    }

    // Save the updated post
    await postDoc.save();

    res.json(postDoc);
  });
});

app.delete("/post/:id", async (req, res) => {
  const { token } = req.cookies;

  // Verify the JWT token
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) return res.status(403).json("Unauthorized");

    const { id } = req.params;

    // Find the post by its ID
    const postDoc = await PostModel.findById(id);
    if (!postDoc || !postDoc.author) {
      return res.status(404).json("Post not found");
    }

    // Check if the logged-in user is the author of the post
    const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
    if (!isAuthor) {
      return res.status(400).json("You are not the author");
    }

    // Delete the post
    await PostModel.findByIdAndDelete(id);

    res.status(200).json("Post deleted successfully");
  });
});

// Register a new user
const salt = genSaltSync(10);
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

// Get profile information based on token
app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

// Login and generate JWT token
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = compareSync(password, userDoc.password);
  if (passOk) {
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json({
        id: userDoc._id,
        username,
      });
    });
  } else {
    res.status(400).json("wrong credentials");
  }
});

// Logout by clearing token
app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

// Start the server
app.listen(4000, () => console.log("Server running on port 4000"));

// app.use(cors({credentials:true,origin:'http://localhost:3000'}));
// app.use(json());

// app.post('/login', async (req,res) => {
//   const {username,password} = req.body;
//   const userDoc = await findOne({username});
//   const passOk = compareSync(password, userDoc.password);
//   if (passOk) {
//     // logged in
//     sign({username,id:userDoc._id}, secret, {}, (err,token) => {
//       if (err) throw err;
//       res.cookie('token', token).json({
//         id:userDoc._id,
//         username,
//       });
//     });
//   } else {
//     res.status(400).json('wrong credentials');
//   }
// });

// });

// });
