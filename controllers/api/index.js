// Imports
const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const commentRoutes = require('./comment-routes.js');
const postRoutes = require('./post-routes.js');

// Routers
router.use('/user', userRoutes);
router.use('/comment', commentRoutes);
router.use('/post', postRoutes);

module.exports = router;