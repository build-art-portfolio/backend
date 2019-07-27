const db = require("../data/dbConfig");

module.exports = {
  findPosts,
  findPostById
};

function findPosts() {
  return db("users")
    .join("posts", "users.id", "posts.userID")
    .orderBy("posts.createdAt")
    .select("username", "profilePhoto", "url", "createdAt", "description");
}

function findPostById(id) {
  return db("posts")
    .join("users", "users.id", "posts.userID")
    .where("posts.id", id)
    .select("username", "profilePhoto", "url", "createdAt", "description")
    .first();
}
