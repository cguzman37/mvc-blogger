const express = require('express');
const { User, Post, Comment } = require('./Develop/models');
const userRoutes = require('./Develop/controllers/api/user-routes');
const postRoutes = require('./Develop/controllers/api/post-routes');
const commentRoutes = require('./Develop/controllers/api/comment-routes');
const exphbs = require('express-handlebars');


const app = express();
const PORT = process.env.PORT || 3001; 

const hbs = exphbs.create({ });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('<html><body><h1>Welcome to my website!</h1></body></html>');
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

(async () => {
  try {
    await User.sync();
    await Post.sync();
    await Comment.sync();
    console.log('Database synced');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error('Error syncing database:', error);
  }
})();


