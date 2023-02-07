const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("Hello World!");
    res.end();
  })
  .listen(5000, () => {
    console.log("Server listening at http://localhost:5000...");
  });
