const router = require("express").Router();
const Posts = require("./posts-model");
const { authenticate } = require("../middleware");

router.get("", (req, res) => {
  Posts.findPosts()
    .then(posts => {
      res.status(201).json(posts);
    })
    .catch(error => {
      res.status(500).json({ error: "The posts could not be retrieved." });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Posts.findPostById(id)
    .then(post => {
      if (!post) {
        res.status(404).json({ error: "A post with this ID does not exist." });
      } else {
        res.status(200).json(post);
      }
    })
    .catch(error => {
      res.status(500).json({
        error: "Something went wrong while trying to retrieve the photo."
      });
    });
});

module.exports = router;
