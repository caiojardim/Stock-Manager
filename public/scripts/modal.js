const buttonEditProduct = document.querySelectorAll(".edit button");
buttonEditProduct.forEach((button) =>
	button.addEventListener("click", function (e) {
		const id = e.currentTarget.attributes.id.value;
		fetch(`http://localhost:3000/admin/${id}`)
			.then((response) => response.json())
			.then((response) => response[0][0])
			.then((product) => showModal(product));
	})
);
function showModal(product) {
	const html = `
    <div class="modal">
				<div class="modal-header">
					<h1>Atualize o produto</h1>
					<button class="close-modal" onclick="closeModal()">X</button>
				</div>
				<form method="post" action="/admin/${product.id}">
					<div class="input-group">
						<div class="input-wrapper name">
							<label for="name">Nome:</label>
							<input type="text" id="name" name="name"
                value='${product.name}'
              />
						</div>
						<div class="input-wrapper amount">
							<label for="amount">Quantidade:</label>
							<input type="number" id="amount" name="amount"
                value='${product.amount}'
              />
						</div>
						<div class="input-wrapper price">
							<label for="price">Preço:</label>
							<input type="number" step="0.01" id="price" name="price" 
                value='${product.price}'
              />
						</div>
						<button class="add">Update</button>
					</div>
				</form>
			</div>
  `;

	const modal = document.querySelector(".modal-container");
	modal.removeAttribute("none");
	modal.innerHTML = html;
}

function closeModal() {
	const modal = document.querySelector(".modal-container");
	modal.setAttribute("none", "none");
	modal.innerHTML = "";
}
