const sequelize = require('../config/connection');
const { User, Comment, NewPost } = require('../models');

const userData = require('./userData.json');
const commentData = require('./commentData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
  
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    }); 
    console.log('\n----- USER DATA SYNCED -----\n')

    await Comment.bulkCreate(commentData, {}); 
      console.log('\n----- COMMENTS DATA SYNCED -----\n')
  
    await NewPost.bulkCreate(postData, {}); 
      console.log('\n----- TECH BLOG POST DATA SYNCED -----\n')
  
    process.exit(0);
  };
  
  seedDatabase();