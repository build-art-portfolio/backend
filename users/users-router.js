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

router.get("/:id/posts", (req, res) => {
  const id = req.params.id;

  Users.getUserPosts(id)
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

function validUserUpdate(user) {
  const { username, first_name, last_name, bio } = user;
  return username && first_name && last_name && bio;
}

router.put("/:id/", authenticate, async (req, res) => {
  try {
    if (!validUserUpdate(req.body)) {
      res.status(400).json({
        error:
          "Please provide a username, first and last names, and bio for the user."
      });
    } else {
      const user = await Users.updateUser(req.params.id, req.body);
      res
        .status(200)
        .json({ message: "Your user profile was updated successfully." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "There was a problem updating the user profile." });
  }
});

router.delete("/:id", authenticate, (req, res) => {
  const id = req.params.id;

  Users.deleteUser(id)
    .then(user => {
      if (user) {
        res
          .status(200)
          .json({ message: "The user profile was deleted successfully." });
      } else {
        res.status(404).json({ error: " A user with this ID does not exist." });
      }
    })
    .catch(error => {
      req.status(500).json({
        error: "Something went wrong trying to delete the user profile."
      });
    });
});

module.exports = router;
