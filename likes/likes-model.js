const db = require("../data/dbConfig");

module.exports = {
  findLikes,
  addLike,
  likedById,
  removeLike
};

function findLikes() {
  return db("likes");
}

function addLike(like) {
  return db("likes")
    .insert(like, "id")
    .then(ids => {
      const [id] = ids;
      return likedById(id);
    });
}

function likedById(id) {
  return db("likes").where({ postID: id });
}

function removeLike(id) {
  return db("likes")
    .where({ postID: id })
    .del();
}
