const router = require('express').Router();
const { NewPost, NewPost } = require('../../models');

// To create a new post in the tech blog
router.post('/', async (req, res) => {
    try {
        const NewPostData = await NewPost.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(NewPost);
    }   catch (err) {
        res.status(400).json(err);
    }
});

// To delete a post
router.delete('/:id', async (req, res) => {
    try {
      const postData = await NewPost.destroy({
          where: {
              id: req.params.id,
              user_id: req.session.user_id,
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