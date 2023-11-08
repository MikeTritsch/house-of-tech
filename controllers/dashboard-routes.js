const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where:{'user_id': req.session.user_id},
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
    res.redirect('login');
    res.status(500).json(err);
  }
});

module.exports = router;