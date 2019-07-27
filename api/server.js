const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();
const authRouter = require("../auth/auth-router");
const postRouter = require("../posts/posts-router");
const userRouter = require("../users/users-router");

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/posts", postRouter);
server.use("/api/users", userRouter);

module.exports = server;
