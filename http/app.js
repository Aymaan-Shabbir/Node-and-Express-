const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello i am coming from web server");
});

server.listen(8000, () => {
  console.log("Server is running at http://localhost:8000");
});
