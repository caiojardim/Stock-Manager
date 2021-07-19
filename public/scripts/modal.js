function showModal(product) {
	console.log("Salve");
	const html = `
    <div class="modal">
				<div class="modal-header">
					<h1>Atualize o produto</h1>
					<button class="close-modal" onclick="closeModal()">X</button>
				</div>
				<form method="post" action="/admin">
					<div class="input-group">
						<div class="input-wrapper name">
							<label for="name">Nome:</label>
							<input type="text" id="name" name="name" />
						</div>
						<div class="input-wrapper amount">
							<label for="amount">Quantidade:</label>
							<input type="number" id="amount" name="amount" />
						</div>
						<div class="input-wrapper price">
							<label for="price">Preço:</label>
							<input type="number" step="0.01" id="price" name="price" />
						</div>
						<button class="add">Update</button>
					</div>
				</form>
			</div>
  `;
	const modal = document.querySelector(".modal-container");
	console.log(modal.attributes);
	modal.removeAttribute("none");
	modal.innerHTML = html;
}

function closeModal() {
	const modal = document.querySelector(".modal-container");
	modal.setAttribute("none", "none");
	modal.innerHTML = "";
}
