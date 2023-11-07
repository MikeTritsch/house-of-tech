const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

Post.hasMany(Comment, {

})

Post.belongsTo(User, {

})

User.hasMany(Post, {

})

Comment.belongsTo(User, {

})

User.hasMany(Comment, {
  
})