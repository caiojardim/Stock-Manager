async function connect() {
	if (global.connection && global.connection.state !== "disconnected") {
		return global.connection;
	}

	const mysql = require("mysql2/promise");
	const connection = await mysql.createConnection(
		"mysql://root:caio1206@localhost:3306/stock_manager"
	);
	console.log("Conectou no MySQL!");
	global.connection = connection;
	return connection;
}

async function selectProducts() {
	const conn = await connect();
	const [rows] = await conn.query("SELECT * FROM products;");
	return rows;
}

async function insertProduct(product) {
	const conn = await connect();
	const sql = "INSERT INTO products(name, amount, price) VALUES (?,?,?);";
	const values = [product.name, product.amount, product.price];
	return await conn.query(sql, values);
}

async function updateProduct(id, product) {
	const conn = await connect();
	const sql =
		"UPDATE products SET name = ?, amount = ?, price = ? WHERE id = ?;";
	const values = [product.name, product.amount, product.price, id];
	return await conn.query(sql, values);
}

async function deleteProduct(id) {
	const conn = await connect();
	const sql = "DELETE FROM products WHERE id =?;";
	return await conn.query(sql, [id]);
}

module.exports = {
	selectProducts,
	insertProduct,
	updateProduct,
	deleteProduct,
};
