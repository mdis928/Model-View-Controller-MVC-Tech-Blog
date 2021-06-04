const router = require('express').Router();
const { NewPost } = require('../../models');

// Find all posts
router.get('/', async (req, res) => {
    try {
        const postData = await NewPost.findAll({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(postData);
    }   catch (err) {
        res.status(400).json(err);
    }
});

// To create a new post in the tech blog
router.post('/', async (req, res) => {
    try {
        const NewPostData = await NewPost.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(NewPostData);
    }   catch (err) {
        res.status(400).json(err);
    }
});


// update a post by its `id` value
router.put('/:id', async (req, res) => {
    try {
      const postData = await NewPost.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
  
      if (!commentData) {
      res.status(404).json({ message: "No category can be updated with that id"});
      return;
    }  
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


// To delete a post
router.delete('/:id', async (req, res) => {
    try {
      const postData = await NewPost.destroy({
          where: {
              id: req.params.id,
          },
      });

      if (!postData) {
          res.status(404).json({ message: 'No post found with this id'});
          return;
      }

        res.status(200).json(postData);    
      } catch (err) {
          res.status(500).json(err);
      }
});

module.exports = router;