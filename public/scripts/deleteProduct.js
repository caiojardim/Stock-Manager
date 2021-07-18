function deleteProduct(id) {
	console.log("Vrau " + id);
	fetch(`/admin/${id}`, {
		method: "DELETE",
	}).then((window.location = "http://localhost:3000/admin"));
}
