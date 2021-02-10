const https = require("https");
const crypto = require('crypto')
const fs = require('fs')

const start = Date.now();

function doRequest() {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(Date.now() - start);
      });
    })
    .end();
}

doRequest()

function doHash() {
  crypto.pbkdf2("a", "b", 100000, 512, "sha256", () => {
    console.log("Hash:", Date.now() - start);
  });
}

fs.readFile('multitask.js', 'UTF8', () => {
  console.log("FS:", Date.now() - start)
})

doHash()
doHash()
doHash()
doHash()