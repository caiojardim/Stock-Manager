function deleteProduct(id) {
	fetch(`/admin/${id}`, {
		method: "DELETE",
	}).then((window.location = "http://localhost:3000/admin"));
}
