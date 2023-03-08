// const express = require('express');
// const router = express.Router();
// const { Post, User, Comment } = require('../models');
// const withAuth = require('../utils/auth');

// // GET all posts
// router.get('/', async (req, res) => {
//   try {
//     const postData = await Post.findAll({
//       include: [{ model: User, attributes: ['username'] }],
//       order: [['created_at', 'DESC']],
//     });

//     const posts = postData.map(post => post.get({ plain: true }));

//     res.render('homepage', {
//       posts,
//       loggedIn: req.session.loggedIn
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // GET a single post
// router.get('/posts/:id', async (req, res) => {
//   try {
//     const postData = await Post.findByPk(req.params.id, {
//       include: [
//         { model: User, attributes: ['username'] },
//         { model: Comment, include: [{ model: User, attributes: ['username'] }] }
//       ],
//     });

//     if (!postData) {
//       res.status(404).json({ message: 'No post found with this id' });
//       return;
//     }

//     const post = postData.get({ plain: true });

//     res.render('single-post', {
//       post,
//       loggedIn: req.session.loggedIn
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // GET the edit post page
// router.get('/posts/edit/:id', withAuth, async (req, res) => {
//   try {
//     const postData = await Post.findByPk(req.params.id);

//     if (!postData) {
//       res.status(404).json({ message: 'No post found with this id' });
//       return;
//     }

//     const post = postData.get({ plain: true });

//     res.render('edit-post', {
//       post,
//       loggedIn: req.session.loggedIn
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // POST a new post
// router.post('/posts', withAuth, async (req, res) => {
//   try {
//     const newPost = await Post.create({
//       ...req.body,
//       user_id: req.session.userId
//     });

//     res.status(200).json(newPost);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// // PUT update a post
// router.put('/posts/:id', withAuth, async (req, res) => {
//   try {
//     const updatedPost = await Post.update(req.body, {
//       where: {
//         id: req.params.id,
//         user_id: req.session.userId
//       },
//     });

//     if (!updatedPost[0]) {
//       res.status(404).json({ message: 'No post found with this id' });
//       return;
//     }

//     res.status(200).json(updatedPost);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// // DELETE a post
// router.delete('/posts/:id', withAuth, async (req, res) => {
//   try {
//     const deletedPost = await Post.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.userId
//       },
//     });

//     if (!deletedPost) {
//       res.status(404).json({ message: 'No post found with this id' });
//       return;
//     }

//     res.status(200).json(deletedPost);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const { Post } = require('../../models');

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new post
router.post('/', async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update a post
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.id } });
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    const updatedPost = await post.update(req.body);
    res.json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a post
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.id } });
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    await post.destroy();
    res.json({ message: 'Post deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
