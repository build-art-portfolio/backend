const db = require("../data/dbConfig");

module.exports = {
  findPosts,
  findPostById,
  updatePost,
  likePost,
  deletePost
};

function findPosts() {
  return db("users")
    .join("posts", "users.id", "posts.userID")
    .orderBy("posts.createdAt")
    .select(
      "posts.id",
      "username",
      "profilePhoto",
      "url",
      "createdAt",
      "description",
      "likes"
    );
}

function findPostById(id) {
  return db("posts")
    .join("users", "users.id", "posts.userID")
    .where("posts.id", id)
    .select(
      "username",
      "profilePhoto",
      "url",
      "createdAt",
      "description",
      "likes"
    )
    .first();
}

function updatePost(id, changes) {
  return db("posts")
    .where({ id })
    .update(changes);
}

function likePost(id, changes) {
  return db("posts")
    .where({ id })
    .update(changes);
}

function deletePost(id) {
  return db("posts")
    .where({ id })
    .delete();
}
