const db = require("../data/dbConfig");

module.exports = {
  findUsers,
  findUserById,
  getUserPosts,
  addPost,
  updateUser,
  deleteUser
};

function findUsers() {
  return db("users").select(
    "id",
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
    .first()
    .select("username", "first_name", "last_name", "bio", "profilePhoto");
}

function getUserPosts(id) {
  return db("users")
    .join("posts", "users.id", "posts.userID")
    .where("users.id", id)
    .orderBy("posts.createdAt")
    .select("username", "profilePhoto", "url", "createdAt", "description");
}

function addPost(id, post) {
  return db("posts")
    .join("users", "posts.userID", "users.id")
    .where("users.id", id)
    .insert(post)
    .then(ids => {
      const [id] = ids;
      return findPostById(id);
    });
}

function findPostById(id) {
  return db("posts")
    .join("users", "users.id", "posts.userID")
    .where("posts.id", id)
    .select("username", "profilePhoto", "url", "createdAt", "description")
    .first();
}

function updateUser(id, changes) {
  return db("users")
    .where({ id })
    .update(changes);
}

function deleteUser(id) {
  return db("users")
    .where({ id })
    .delete();
}
