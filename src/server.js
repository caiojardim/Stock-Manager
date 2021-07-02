const express = require("express");
const server = express();
const routes = require("./routes");

server.set("view engine", "ejs");

server.use(routes);

server.listen(3000, () => console.log("rodando"));
