exports.up = function(knex) {
  return knex.schema.createTable("posts", posts => {
    posts.increments().unsigned();

    posts.string("url").notNullable();
    posts.timestamp("createdAt").defaultTo(knex.fn.now());
    posts.string("description");
    posts
      .string("userID")
      .references("users.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("posts");
};
