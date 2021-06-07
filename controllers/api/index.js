const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const newPostRoutes = require('./newPostRoutes');

router.use('/user', userRoutes);
router.use('/comment', commentRoutes);
router.use('/newPost', newPostRoutes);

module.exports = router;
