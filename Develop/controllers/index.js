const router = require('express').Router();


const userRoutes = require('./api/user-routes');
const postRoutes = require('./api/post-routes');


router.use('/users', userRoutes);
router.use("/posts", postRoutes);

module.exports = router;