const router = require('express').Router();
const { Comment } = require('../../models');


// Find all comments
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(commentData);
    }   catch (err) {
        res.status(400).json(err);
    }
});

// To create a new comment
router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newComment);
    }   catch (err) {
        res.status(400).json(err);
    }
});


// update a comment by its `id` value
router.put('/:id', async (req, res) => {
    try {
      const commentData = await Comment.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
  
      if (!commentData) {
      res.status(404).json({ message: "No category can be updated with that id"});
      return;
    }  
  
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });



// To delete a comment
router.delete('/:id', async (req, res) => {
    try {
      const commentData = await Comment.destroy({
          where: {
              id: req.params.id,
          },
      });

      if (!commentData) {
          res.status(404).json({ message: 'No comment found with this id'});
          return;
      }

        res.status(200).json(commentData);    
      } catch (err) {
          res.status(500).json(err);
      }
});

module.exports = router;