const db = require("../data/dbConfig");

module.exports = {
  addLike,
  likedById,
  removeLike
};

function addLike(like) {
  return db("likes")
    .insert(like, "id")
    .then(ids => {
      const [id] = ids;
      return likedById(id);
    });
}

function likedById(id) {
  return db("likes")
    .where({ id })
    .first();
}

function removeLike(id) {
  return db("likes")
    .where({ id })
    .del();
}
