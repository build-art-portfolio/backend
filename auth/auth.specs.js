const request = require("supertest");
const db = require("../data/dbConfig");
const Auth = require("./auth-model");

const server = require("../api/server");

describe("auth", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("register", () => {
    it("Should add a user to the database", async () => {
      const users = await db("users");

      await Auth.add({
        username: "NewUser",
        password: "NewPassword",
        first_name: "FirstName",
        last_name: "LastName",
        email: "email@email.com"
      });

      const newUsers = await db("users");
      expect(newUsers).toHaveLength(users.length + 1);
    });
  });

  describe("login", () => {
    it("Should return a 200", () => {
      const user = {
        username: "cassandra-springer",
        password: "password"
      };

      return request(server)
        .post("/api/auth/login")
        .send(user)
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
  });
});
