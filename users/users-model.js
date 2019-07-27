const db = require("../data/dbConfig");

module.exports = {
  findUsers,
  findUserById,
  updatePost
};

function findUsers() {
  return db("users").select(
    "username",
    "first_name",
    "last_name",
    "bio",
    "profilePhoto"
  );
}

function findUserById(id) {
  return db("users")
    .where("users.id", id)
    .select("username", "first_name", "last_name", "bio", "profilePhoto");
}

function updatePost(id, changes) {
  return db("posts")
    .where({ id })
    .update(changes);
}
