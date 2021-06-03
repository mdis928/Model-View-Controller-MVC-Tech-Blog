const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const newPostRoutes = require('./newPostRoutes');

router.use('/User', userRoutes);
router.use('/Comment', commentRoutes);
router.use('/NewPost', newPostRoutes);

module.exports = router;
