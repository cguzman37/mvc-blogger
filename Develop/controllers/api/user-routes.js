// const express = require('express');
// const { User } = require('../models');

// const router = express.Router();

// // GET all users
// router.get('/', async (req, res) => {
//   try {
//     const users = await User.findAll();
//     res.status(200).json(users);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // GET a single user by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const user = await User.findByPk(req.params.id);
//     if (!user) {
//       res.status(404).json({ message: 'No user found with this id' });
//     } else {
//       res.status(200).json(user);
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // POST create a new user
// router.post('/', async (req, res) => {
//   try {
//     const newUser = await User.create(req.body);
//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // PUT update an existing user by ID
// router.put('/:id', async (req, res) => {
//   try {
//     const [rowsUpdated, [updatedUser]] = await User.update(req.body, {
//       where: {
//         id: req.params.id
//       },
//       returning: true // return the updated user in the response
//     });
//     if (rowsUpdated === 0) {
//       res.status(404).json({ message: 'No user found with this id' });
//     } else {
//       res.status(200).json(updatedUser);
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // DELETE an existing user by ID
// router.delete('/:id', async (req, res) => {
//   try {
//     const rowsDeleted = await User.destroy({
//       where: {
//         id: req.params.id
//       }
//     });
//     if (rowsDeleted === 0) {
//       res.status(404).json({ message: 'No user found with this id' });
//     } else {
//       res.status(204).end();
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

