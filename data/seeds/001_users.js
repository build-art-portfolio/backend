const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  return knex("users").then(function() {
    return knex("users").insert([
      {
        username: "chris-ian-jones",
        password: bcrypt.hashSync("password", 10),
        first_name: "Chris",
        last_name: "Jones",
        email: "cjones@lambdaschool.com",
        profilePhoto: "https://tinyurl.com/y4ejqdpk"
      },
      {
        username: "ben-solt",
        password: bcrypt.hashSync("password", 10),
        first_name: "Ben",
        last_name: "Solt",
        email: "bsolt@lambdaschool.com",
        profilePhoto:
          "https://avatars0.githubusercontent.com/u/52627840?s=460&v=4"
      },
      {
        username: "eleasah-halsmer",
        password: bcrypt.hashSync("password", 10),
        first_name: "Eleasah",
        last_name: "Halsmer",
        email: "ehalsmer@lambdaschool.com",
        profilePhoto:
          "https://avatars1.githubusercontent.com/u/44128101?s=460&v=4"
      },
      {
        username: "karl-beksa",
        password: bcrypt.hashSync("password", 10),
        first_name: "Karl",
        last_name: "Beksa",
        email: "kbeksa@lambdaschool.com",
        profilePhoto:
          "https://avatars0.githubusercontent.com/u/17229414?s=460&v=4"
      },
      {
        username: "cassandra-springer",
        password: bcrypt.hashSync("password", 10),
        first_name: "Cassandra",
        last_name: "Springer",
        email: "cspringer@lambdaschool.com",
        profilePhoto:
          "https://avatars3.githubusercontent.com/u/39530397?s=460&v=4"
      },
      {
        username: "bishop-lake",
        password: bcrypt.hashSync("password", 10),
        first_name: "Bishop",
        last_name: "Lake",
        email: "blake@lambdaschool.com",
        profilePhoto:
          "https://avatars2.githubusercontent.com/u/50998248?s=460&v=4"
      },
      {
        username: "myles-azehko",
        password: bcrypt.hashSync("password", 10),
        first_name: "Myles",
        last_name: "Azehko",
        email: "mazehko@lambdaschool.com",
        profilePhoto:
          "https://avatars0.githubusercontent.com/u/49720658?s=460&v=4"
      },
      {
        username: "monique-soto",
        password: bcrypt.hashSync("password", 10),
        first_name: "Monique",
        last_name: "Soto",
        email: "msoto@lambdaschool.com",
        profilePhoto: "https://tinyurl.com/y465ywva"
      }
    ]);
  });
};
