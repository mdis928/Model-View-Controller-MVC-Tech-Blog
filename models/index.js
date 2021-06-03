const User = require('./User');

// NewPost is in the homescreen
const NewPost = require('./NewPost');

const Dashboard = require('./Dashboard');
const Comment = require('./Comment');

User.hasMany(NewPost, {
    foreignKey: 'user_id',
});

Dashboard.hasMany(NewPost, {
    foreignKey: "user_id"
});

NewPost.hasMany(Comment, {
    foreignKey: 'user_id'
});

module.exports = { User, NewPost, Dashboard, Comment};