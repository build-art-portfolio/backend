const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();
const authRouter = require("../auth/auth-router");
const postRouter = require("../posts/posts-router");
const userRouter = require("../users/users-router");
const imageRouter = require("../data/images/images-router");
const likesRouter = require("../likes/likes-router");

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/posts", postRouter);
server.use("/api/users", userRouter);
server.use("/api/images", imageRouter);
server.use("/api/likes", likesRouter);
server.get("/", (req, res) => {
  res.send(`<h2>Art Portfolio!</h2>`);
});

module.exports = server;
