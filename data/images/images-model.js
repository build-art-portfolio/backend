const db = require("../dbConfig");

module.exports = {
  findImages
};

function findImages() {
  return db("images").select("url");
}
