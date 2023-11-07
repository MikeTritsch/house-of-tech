const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const postData = [{
      title: 'Test',
      text: 'Hello world!'
    },
    {
      title: 'Test 2',
      text: 'Hello world!!!!'
    }]

    // const postDataSerial = postData.map((post) => {
    //   return post.get({ plain: true })
    // });

    res.render('all-posts-admin', {
      layout: 'dashboard',
      postData
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;