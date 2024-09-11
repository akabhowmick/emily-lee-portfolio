import express from "express";
import cors from "cors";
import User from "./Models/User.js";
import pkg from "bcryptjs";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import multer from "multer";
import PostModel from "./models/Post.js";
import { renameSync } from "fs";
const { genSaltSync, hashSync, compareSync } = pkg;
import { connect } from "mongoose";
const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());

//MongoDB connection
connect(
  "mongodb+srv://aka-mern-blog:IxToRGuPDCKy7k8T@cluster0.zmtej.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const uploadMiddleware = multer({ dest: "uploads/" });

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
    }); // Create new Post document
    await newPost.save(); // Save to MongoDB
    res.status(201).json(newPost); // Send created post back
  });
});

app.get('/post', async (req,res) => {
  res.json(
    await find()
      .populate('author', ['username'])
      .sort({createdAt: -1})
      .limit(20)
  );
});

app.get('/post/:id', async (req, res) => {
  const {id} = req.params;
  const postDoc = await PostModel.findById(id).populate('author', ['username']);
  res.json(postDoc);
})


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

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

const secret = "asdfe45we45w345wegw345werjktjwertkj";
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = compareSync(password, userDoc.password);
  if (passOk) {
    // logged in
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

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

app.listen(4000, () => console.log("Server running on port 4000"));

// const secret = 'asdfe45we45w345wegw345werjktjwertkj';

// app.use(cors({credentials:true,origin:'http://localhost:3000'}));
// app.use(json());
//
// app.use('/uploads', static(__dirname + '/uploads'));

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

// app.put('/post',uploadMiddleware.single('file'), async (req,res) => {
//   let newPath = null;
//   if (req.file) {
//     const {originalname,path} = req.file;
//     const parts = originalname.split('.');
//     const ext = parts[parts.length - 1];
//     newPath = path+'.'+ext;
//     renameSync(path, newPath);
//   }

//   const {token} = req.cookies;
//   verify(token, secret, {}, async (err,info) => {
//     if (err) throw err;
//     const {id,title,summary,content} = req.body;
//     const postDoc = await findById(id);
//     const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
//     if (!isAuthor) {
//       return res.status(400).json('you are not the author');
//     }
//     await postDoc.update({
//       title,
//       summary,
//       content,
//       cover: newPath ? newPath : postDoc.cover,
//     });

//     res.json(postDoc);
//   });

// });

// app.get('/post', async (req,res) => {
//   res.json(
//     await find()
//       .populate('author', ['username'])
//       .sort({createdAt: -1})
//       .limit(20)
//   );
// });

// app.get('/post/:id', async (req, res) => {
//   const {id} = req.params;
//   const postDoc = await findById(id).populate('author', ['username']);
//   res.json(postDoc);
// })

// app.listen(4000);
