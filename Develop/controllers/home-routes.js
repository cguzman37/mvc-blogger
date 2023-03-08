// const express = require('express');
// const router = express.Router();
// const { User, Post, Comment } = require('../models');

// // User routes
// router.get('/', async (req, res) => {
//   try {
//     const users = await User.findAll();
//     res.json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// router.post('/', async (req, res) => {
//   try {
//     const user = await User.create(req.body);
//     res.json(user);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Post routes
// router.get('/', async (req, res) => {
//   try {
//     const posts = await Post.findAll();
//     res.json(posts);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// router.post('/', async (req, res) => {
//   try {
//     const post = await Post.create(req.body);
//     res.json(post);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Comment routes
// router.get('/', async (req, res) => {
//   try {
//     const comments = await Comment.findAll();
//     res.json(comments);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// router.post('/', async (req, res) => {
//   try {
//     const comment = await Comment.create(req.body);
//     res.json(comment);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = {
//   user: router,
//   post: router,
//   comment: router,
// };

const express = require('express');
const router = express.Router();
const { userRoutes } = require('./controllers/user-routes');
const { postRoutes } = require('./controllers/post-routes');
const { commentRoutes } = require('./controllers/comment-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;