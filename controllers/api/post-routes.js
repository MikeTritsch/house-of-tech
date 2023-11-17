// Imports
const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a new post
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

  // Update existing post by post ID
  router.put('/:id', withAuth, async (req, res) => {
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
      res.json({ message: 'Post updated!' })
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // Delete existing post
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.destroy({
        where: {
          post_id: req.params.id,
        }
      });

      if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
      }

      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;
