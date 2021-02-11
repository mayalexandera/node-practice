process.env.UV_THREADPOOL_SIZE = 1
const cluster = require("cluster");
// is the file being executed in master mode?
if (cluster.isMaster) {
  // cause index.js to be executed again, but in child mode.
  // cluster.fork();
  cluster.fork();
} else {
  // i'm a child, i'm going to act like a server and do nothing else.
  const express = require("express");
  const crypto = require('crypto')
  const app = express();

  app.get("/", (req, res) => {
    crypto.pbkdf2("a", "b", 100000, 512, "sha256", () => {
      res.send("Hi there");
      // console.log("1:", Date.now() - start);
    });
  });

  app.get("/fast", (req, res) => {
    res.send("this was fast");
  });
  app.listen(3000);
}
