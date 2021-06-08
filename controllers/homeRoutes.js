const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../util/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['username', 'ASC']],
    });

    const users = userData.map((User) => User.get({ plain: true }));

    res.render('/homepage', {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

router.get('/dashboard', async (req, res) => {
    console.log('hello')
  try {
    const postData = await NewPost.findAll({
    });

    console.log(postData)

    res.render('dashboard', {postData});

}   catch (err) {
    res.status(400).json(err);
}

});

module.exports = router;