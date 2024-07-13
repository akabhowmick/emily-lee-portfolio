import { Router } from 'express';
const router = Router();
import Post, { find } from '../models/Post';

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new post
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });

  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
