(async () => {
	const db = require("./db");
	console.log("Começou!");

	// INSERT
	console.log("INSERT INTO PRODUCTS");
	const result = await db.insertProduct({
		name: "feijão",
		amount: 5,
		price: 8.99,
	});
	console.log(result);

	// UPDATE
	console.log("UPDATE PRODUCTS");
	const result2 = await db.updateProduct(2, {
		name: "chocolate",
		amount: 8,
		price: 3.25,
	});
	console.log(result2);

	// DELETE
	console.log("DELETE FROM PRODUCTS");
	const result3 = await db.deleteProduct(4);
	console.log(result3);

	// SELECT
	console.log("SELECT * FROM PRODUCTS");
	const products = await db.selectProducts();
	console.log(products);
})();
