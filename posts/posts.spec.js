const request = require("supertest");
const db = require("../data/dbConfig");

const server = require("../api/server");

describe("posts", () => {
  let token;

  beforeAll(async () => {
    await db("users").truncate();
  });

  describe("get posts", () => {
    it("should return a 201", () => {
      return request(server)
        .get(`/api/posts/`)
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
  });
});
