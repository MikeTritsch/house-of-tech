const router = require('express').Router();
const { Post, User, Comment } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all posts for homepage
router.get('/', async (req, res) => {
  console.log('Hello');
  try {
    const postData = await Post.findAll({
      include: [
        {
        model: User,
        attributes: ['username']
        },
      ]
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('all-posts', {
      posts,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/post/:post_id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: { post_id: req.params.post_id },
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });
    console.log(postData);
  
    if (postData) {
      const post = postData.get({ plain: true });
      res.render('single-post', 
      { post, loggedIn: req.session.loggedIn })
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/signup', async (req, res) => {
  try {
    res.render('signup', {
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
    res.render('login', {
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
