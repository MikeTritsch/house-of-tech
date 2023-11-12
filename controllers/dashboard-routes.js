const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    console.log('author_id:', req.session.author_id)
    const postData = await Post.findAll({
      where:{'user_id': req.session.author_id},
      include: [User]
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    // const postDataSerial = postData.map((post) => {
    //   return post.get({ plain: true })
    // });

    res.render('all-posts-admin', {
      layout: 'dashboard',
      posts
    });
  } catch (err) {
    console.log(err);
    res.status(500).render('login', {
      layout: 'main', // Assuming 'main' is your default layout
      message: 'An error occurred while fetching your posts. Please try again later.'
    });
  }
});

module.exports = router;