const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    // console.log('userId:', req.session.userId)
    const postData = await Post.findAll({
      where: {
        author_id: req.session.user_id,
      },
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
    res.redirect('login');
    }
});

module.exports = router;