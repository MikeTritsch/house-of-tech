const router = require('express').Router();
const { authPlugins } = require('mysql2');
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  const body = req.body;

  try {
    const newPost = await Post.create({ ...body, author_id: req.session.user_id });
    res.json(newPost);
    
  } catch (err) {
    console.log('Posting failed.', err);
    res.status(500).json(err);
  }
  });

  router.put('/:id', async (req, res) => {
    // Add back in withAuth
    const body = req.body;
    console.log(body);
    try {
      Post.update(
        body,
        {
          where: {
            post_id: req.params.id,
          }
        }
      )
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;
