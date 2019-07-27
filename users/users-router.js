const router = require("express").Router();
const Users = require("./users-model");
const { authenticate } = require("../middleware");

router.get("/", (req, res) => {
  Users.findUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json({ error: "There was a problem getting the users." });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Users.findUserById(id)
    .then(user => {
      if (!user) {
        res.status(404).json({ error: "A user with this ID does not exist." });
      } else {
        res.status(200).json(user);
      }
    })
    .catch(error => {
      res.status(500).json({
        error: "Something went wrong while trying to retrieve the user."
      });
    });
});

function validPostUpdate(post) {
  const { description } = post;
  return description;
}

router.put("/:id/posts/:postID", authenticate, async (req, res) => {
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

module.exports = router;
