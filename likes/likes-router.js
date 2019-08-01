const router = require("express").Router();
const Likes = require("./likes-model");
const { authenticate } = require("../middleware");

function validateLike(req, res, next) {
  const likes = req.body;

  if (!likes.userID || !likes.postID) {
    res
      .status(400)
      .json({ error: "A user or post ID is missing from this request." });
  } else {
    next();
  }
}

router.post("/posts/:id", authenticate, validateLike, async (req, res) => {
  const like = req.body;
  try {
    const liking = await Likes.addLike(like);
    res
      .status(201)
      .json({ like, message: "The post has been liked successfully." });
  } catch (error) {
    res.status(500).json({ error: "There was an issue liking this post." });
  }
});

router.delete("/posts/:id", authenticate, async (req, res) => {
  const id = req.params.id;
  try {
    const unliking = await Likes.removeLike(id);
    if (unliking > 0) {
      res.status(200).json({ message: "The post has been unliked." });
    } else {
      res
        .status(404)
        .json({ message: "There was a problem unliking this post." });
    }
  } catch (error) {
    res.status(500).json({ error: "There was a problem unliking this post." });
  }
});

module.exports = router;
