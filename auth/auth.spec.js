const request = require("supertest");
const db = require("../data/dbConfig");

const server = require("../api/server");

describe("auth", () => {
  let token;

  beforeAll(async () => {
    await db("users").truncate();
  });

  describe("register", () => {
    it("Should add a user to the database", async () => {
      const user = {
        username: "NewUser",
        password: "NewPassword",
        first_name: "FirstName",
        last_name: "LastName",
        email: "email@email.com"
      };

      return request(server)
        .post(`/api/auth/register`)
        .send(user)
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
  });

  describe("login", () => {
    it("Should return a 200", () => {
      const user = {
        username: "NewUser",
        password: "NewPassword"
      };

      return request(server)
        .post("/api/auth/login")
        .send(user)
        .then(res => {
          expect(res.status).toBe(200);
          token = res.body.token;
        });
    });
  });

  describe("get users", () => {
    it("should return a 200", () => {
      return request(server)
        .get("/api/users/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });

  describe("get users by id", () => {
    it("should return a 200", () => {
      return request(server)
        .get("/api/users/1")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });

  describe("get a user's posts", () => {
    it("should return a 200", () => {
      return request(server)
        .get("/api/users/1/posts")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });

  describe("create post by user", () => {
    it("should return a 201", () => {
      const post = {
        url:
          "https://lh3.googleusercontent.com/12j4ep94E-DeI3IA-rMC_7yyggOKhs0uVfBqYqaj5CovCw_CcDhqc2DC_yJrb-4UJZ7TDXtS4r35T2cUOTKI9gRmpZeVPRpTeaIh0Jrck2uwpaIYZugI-w2iCebBSMvYHxzo2WRTClzNpnNuMSVfDYkbWHqPFr_scbPXeQ6q_AcM71acw2dJCEc5KVUOdjt2hqTxvMf0qP0bswIhAfkrNKa0pefn4JraCiRBe29AV3tiq6BdREFzdvcJiq6miUYluZE1ebQjDHQA8CNEbU2c8h3Sv2xnuVz9DWTlCl8HkMjNzrzccVn2p3c1n7Ih6X_dYxUZzLhIuWuwxrT-JcTUD_16vZZAZ7EtJLylmbWFHJTgvST9f3rmWAs9xt6rZuYxPqKZzWduS0u8MZmHL0mCxGSfqH3m_C93-ZHPcsgu4Vaz3ghwwXtezMSLTqrpWHqbNQu3XtR2kUYyj-hwYyfcLldek1OnOXHEdlqIIbspzAFTINzS6FrKBgYYa9FQhSwCDe8fZVcqMsNXJ9F3Ywas2gR7soVdLygPg86RnYGs5W6ZPVu8kkKvWPYrja-pDH7Q4CW45FLSDHNpCK1Pi07JbVf_DKKMfgXBkwSMd8usN2LUnz6FAVv3-xoRwej6UmIhsR_Ijn4NSj7IZm0R-HLkua5BpZSRUDEaQBrb8aJwokhu9r87QqZlAYAqlJNRY35d0jYvwTbpuqKpFB6lKOLTXO1f=w334-h501-no",
        description: "Description for the post."
      };

      return request(server)
        .post("/api/users/1/posts")
        .set("authorization", token)
        .send(post)
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
  });

  describe("update user information", () => {
    it("should return a 200", () => {
      const updatedUser = {
        username: "NewUser",
        first_name: "FirstName",
        last_name: "LastName",
        email: "email@email.com",
        bio: "New bio."
      };
      return request(server)
        .put("/api/users/1")
        .set("authorization", token)
        .send(updatedUser)
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });

  describe("remove a user", () => {
    it("should return a 200", () => {
      return request(server)
        .delete("/api/users/1")
        .set("authorization", token)
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});
