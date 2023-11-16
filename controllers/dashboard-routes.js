const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        author_id: req.session.user_id,
      },
    });

    const posts = postData.map((post) => post.get({ plain: true }));


    res.render('all-posts-admin', {
      layout: 'dashboard',
      posts
    });
  } catch (err) {
    console.log(err);
    res.redirect('login');
    }
});

router.get('/new', withAuth, (req, res) => {
  res.render('new-post', {
    layout: 'dashboard',
  });
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: { post_id: req.params.id },
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render('edit-post', {
      layout: 'dashboard',
      post
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;