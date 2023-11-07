const router = require('express').Router();
const { authPlugins } = require('mysql2');
const { Post } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    res.render('all-posts');

    const posts = postData.map((post) =>
      post.get({ plain: true })
    );

    res.render('all-posts', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/posts/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Post,
          attributes: [
            'topic',
            'post_body',
            'author_id',
            'date',
          ],
        },
      ],
    });

    const post = postData.get({ plain: true });
    res.render('post', { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
