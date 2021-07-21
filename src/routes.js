const express = require("express");
const routes = express.Router();
const db = require("./db/db");

const views = __dirname + "/views/";

routes.get("/", (req, res) => {
	return res.render(views + "index");
});

routes.get("/admin", async (req, res) => {
	const products = await db.selectProducts();
	return res.render(views + "admin", { products });
});

routes.get("/admin/:id", async (req, res) => {
	const product = await db.selectOneProduct(req.params.id);
	res.json(product);
});

// put
routes.post("/admin/:id", (req, res) => {
	const product = req.body;
	const id = req.params.id;
	db.updateProduct(id, product);

	res.redirect("/admin");
});

routes.post("/admin", async (req, res) => {
	const product = req.body;
	if (product.name.trim() === "") {
		return res.send("Nome escrito não é valido!");
	}
	if (Number(product.amount) < 0) {
		return res.send("Quantidade de produtos invalida!");
	}
	if (Number(product.price) <= 0) {
		return res.send("Preço do produto invalido!");
	}

	formatedProduct = {
		name: product.name,
		amount: Number(product.amount),
		price: Number(product.price),
	};
	await db.insertProduct(formatedProduct);
	res.redirect("/admin");
});

routes.delete("/admin/:id", (req, res) => {
	db.deleteProduct(req.params.id);
	res.redirect("/admin");
});

module.exports = routes;
