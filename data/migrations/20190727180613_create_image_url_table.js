exports.up = function(knex) {
  return knex.schema.createTable("images", images => {
    images.increments();

    images.string("url", 256).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("images");
};
