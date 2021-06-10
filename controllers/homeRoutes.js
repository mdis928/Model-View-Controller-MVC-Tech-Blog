const router = require('express').Router();
const { User, NewPost } = require('../models');
const withAuth = require('../util/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', async (req, res) => {
  try {
    const postData = await NewPost.findAll();

    const posts = postData.map((posts) => posts.get({ plain: true }));

    res.render('homepage', {
     layout: 'main',
     posts,
    logged_in: req.session.logged_in,
  });
} catch (err) {
  res.status(500).json(err);
}
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }

  res.render('login');
});

router.get('/dashboard', async (req, res) => {
  try {
    const postData = await NewPost.findAll();

    const posts = postData.map((posts) => posts.get({ plain: true }));

    res.render('dashboard', {
     layout: 'main',
     posts,
    logged_in: req.session.logged_in,
  });
} catch (err) {
  res.status(500).json(err);
}
});


module.exports = router;