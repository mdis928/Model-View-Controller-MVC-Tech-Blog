const User = require('./User');

// NewPost is on the dashboard
const NewPost = require('./NewPost');


// To add comments, you need to be in the homescreen
const Comment = require('./Comment');



NewPost.belongsTo(User, {
    foreignKey: 'user_id'
})

NewPost.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, NewPost, Comment};