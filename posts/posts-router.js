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

function validPostUpdate(post) {
  const { description } = post;
  return description;
}

router.put("/:id/", authenticate, async (req, res) => {
  try {
    if (!validPostUpdate(req.body)) {
      res
        .status(400)
        .json({ error: "Please provide a description for the post." });
    } else {
      const post = await Posts.updatePost(req.params.id, req.body);
      res.status(200).json({ message: "Your post was updated successfully." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "There was a problem updating the post description." });
  }
});

router.delete("/:id", authenticate, (req, res) => {
  const id = req.params.id;

  Posts.deletePost(id)
    .then(post => {
      if (post) {
        res
          .status(200)
          .json({ message: "Your post was deleted successfully." });
      } else {
        res.status(404).json({ error: " A post with this ID does not exist." });
      }
    })
    .catch(error => {
      req
        .status(500)
        .json({ error: "Something went wrong trying to delete this post." });
    });
});

module.exports = router;
