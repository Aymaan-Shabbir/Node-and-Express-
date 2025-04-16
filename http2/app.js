const http = require("http");

const server = http.createServer((req, res) => {
  //   if (req.url === "/") {
  //     res.writeHead(200, { "content-type": "text/html" });
  //     res.end("Home");
  //   } else if (req.url === "/api/user") {
  //     const obj = {
  //       name: "Aymaan",
  //       age: 21,
  //       role: "developer",
  //     };
  //     console.log(JSON.parse(JSON.stringify(obj)));
  //     res.writeHead(200, { "content-type": "application/json" });
  //     res.end(JSON.stringify(obj));
  //   } else if (req.url === "/login") {
  //     res.writeHead(200, { "content-type": "text:html" });
  //     res.end("<h1>Login</h1>");
  //   } else if (req.url === "/signup") {
  //     res.writeHead(200, { "content-type": "text:html" });
  //     res.end("<h1>Signup</h1>");
  //   }else{
  //     res.writeHead(404, { "content-type": "text/html" });
  //     res.end("<h1>Page not found</h1>");
  //   }
  //Handling a post method

  if (req.method === "POST" && req.url === "/submit") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      console.log(JSON.parse(body));
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({ success: true, message: "Data received successfully" })
      );
    });
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ success: false, message: "Not found" }));
  }
});
server.listen("8000", () => {
  console.log("server listening at port 8000");
});
