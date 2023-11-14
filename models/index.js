const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

User.hasMany(Post, {
  foreignKey: 'author_id',
  onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  foreignKey: 'author_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

// Comment.belongsTo(Post, {
//   foreignKey: 'post_id',
// });

module.exports = { Comment, User, Post }