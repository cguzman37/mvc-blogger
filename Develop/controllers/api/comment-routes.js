// const { Comment } = require('../models');



// const commentController = {
//   // create a new comment
//   createComment: async (req, res) => {
//     try {
//       const newComment = await Comment.create({
//         body: req.body.body,
//         userId: req.session.userId, // get userId from the current session
//         postId: req.params.postId // get postId from the URL parameter
//       });
//       res.status(200).json(newComment);
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   },

//   // update a comment
//   updateComment: async (req, res) => {
//     try {
//       const updatedComment = await Comment.update(
//         {
//           body: req.body.body
//         },
//         {
//           where: {
//             id: req.params.id,
//             userId: req.session.userId // only allow update if the comment belongs to the current user
//           }
//         }
//       );
//       if (!updatedComment[0]) {
//         res.status(404).json({ message: 'Comment not found' });
//         return;
//       }
//       res.status(200).json(updatedComment);
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   },

//   // delete a comment
//   deleteComment: async (req, res) => {
//     try {
//       const deletedComment = await Comment.destroy({
//         where: {
//           id: req.params.id,
//           userId: req.session.userId // only allow delete if the comment belongs to the current user
//         }
//       });
//       if (!deletedComment) {
//         res.status(404).json({ message: 'Comment not found' });
//         return;
//       }
//       res.status(200).json(deletedComment);
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   }
// };

// module.exports = commentController;
const express = require('express');
const router = express.Router();
const { Comment } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    const updatedComment = await comment.update(req.body);
    res.json(updatedComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    await comment.destroy();
    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
