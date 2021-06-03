const User = require('./User');

// NewPost is on the dashboard
const NewPost = require('./NewPost');

// In the dashboard, you can add a new post and update as well
const Dashboard = require('./Dashboard');

// To add comments, you need to be in the homescreen
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