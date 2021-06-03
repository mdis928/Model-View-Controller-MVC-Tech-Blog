const User = require('./User');
const NewPost = require('./NewPost');
const Dashboard = require('./Dashboard');
const Comment = require('./Comment');

Dashboard.belongsTo(NewPost, {
    foreignKey: 'Dashboard_id',
});

NewPost.hasMany(Comment, {
    foreignKey: "NewPost_id"
});

module.exports = { User, NewPost, Dashboard, Comment};