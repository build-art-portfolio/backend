exports.up = function(knex) {
  return knex.schema.createTable("users", users => {
    users.increments();

    users
      .string("username", 128)
      .notNullable()
      .unique();
    users.string("password", 128).notNullable();
    users.string("first_name", 128).notNullable();
    users.string("last_name", 128).notNullable();
    users
      .string("email", 128)
      .notNullable()
      .unique();
    users.string("bio", 256);
    users
      .string("profilePhoto")
      .defaultTo(
        "https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-75-512.png"
      );
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
