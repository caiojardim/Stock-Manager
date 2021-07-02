const express = require("express");
const routes = express.Router();

const views = __dirname + "/views/";

routes.get("/", (req, res) => {
	return res.render(views + "index");
});

routes.get("/admin", (req, res) => {
	return res.render(views + "admin");
});

module.exports = routes;
