exports.up = function(knex) {
  return knex.schema.createTable("likes", likes => {
    likes.increments().unsigned();

    likes
      .integer("postID")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("posts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    likes
      .integer("userID")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    likes.unique(["postID", "userID"]);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("likes");
};
