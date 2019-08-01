exports.seed = function(knex) {
  return knex("likes").then(function() {
    return knex("likes").insert([
      { postID: 35, userID: 1 },
      { postID: 35, userID: 2 },
      { postID: 35, userID: 3 },
      { postID: 35, userID: 4 },
      { postID: 36, userID: 1 },
      { postID: 36, userID: 2 },
      { postID: 36, userID: 3 },
      { postID: 36, userID: 4 },
      { postID: 36, userID: 5 },
      { postID: 36, userID: 6 },
      { postID: 37, userID: 1 },
      { postID: 37, userID: 2 },
      { postID: 37, userID: 3 },
      { postID: 37, userID: 4 },
      { postID: 38, userID: 1 },
      { postID: 38, userID: 2 },
      { postID: 38, userID: 3 },
      { postID: 38, userID: 4 },
      { postID: 39, userID: 5 },
      { postID: 39, userID: 1 },
      { postID: 39, userID: 2 },
      { postID: 39, userID: 3 },
      { postID: 39, userID: 4 },
      { postID: 40, userID: 5 },
      { postID: 40, userID: 1 },
      { postID: 40, userID: 2 },
      { postID: 40, userID: 3 },
      { postID: 41, userID: 1 },
      { postID: 41, userID: 2 },
      { postID: 41, userID: 3 },
      { postID: 41, userID: 4 },
      { postID: 41, userID: 5 },
      { postID: 41, userID: 6 }
    ]);
  });
};
