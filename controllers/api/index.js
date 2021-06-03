const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const newPostRoutes = require('./newPostRoutes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/NewPost', newPostRoutes);

module.exports = routers;
