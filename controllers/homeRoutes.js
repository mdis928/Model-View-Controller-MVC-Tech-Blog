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
  // res.render('login')
} catch (err) {
  res.status(500).json(err);
}
});



// To get to the login/signup page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});



router.get('/dashboard', withAuth, async (req, res) => {
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