exports.up = function(knex) {
  return knex.schema.createTable("posts", posts => {
    posts.increments().unsigned();

    posts.string("url", 999).notNullable();
    posts.timestamp("createdAt").defaultTo(knex.fn.now());
    posts.string("description");
    posts
      .integer("userID")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("posts").dropForeign("users", [userID]);
};
