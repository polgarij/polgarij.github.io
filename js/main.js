function calcAmount() {
	let price = 1000;
	let amountInput = document.querySelector("input[name='amount-input']");
	let amountNumber = parseInt(amountInput.value);
	amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
	
	showSumPrice(price, amountNumber);
}

function showSumPrice(price, amountNumber) {
	amountNumber = amountNumber || 0;
	let showAmount = document.querySelector("span.show-amount");
	if (amountNumber > 10) {
		alert("Maximum 10 terméket vásárolhat!");
	} else if (amountNumber < 1) {
		alert("Minimum 1 terméket kell vásárolnia!");
	} else {
		let amount = parseInt(amountInput.value) * price;
		showAmount.innerHTML = amount;
	}
	
}

let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltéteket!";

let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);

parent.removeChild(helpText);


let sendButton = document.querySelector("form .btn.btn-primary");
/*
sendButton.onclick = function() {
	alert("Hello JS");
}
*/
sendButton.addEventListener("click", function() {
	alert("Hello JS");
});

window.addEventListener("resize", function() {
	console.log(this.innerHeight, this.innerWidth);
});

//* Űrlap események

let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function(ev) {
	ev.preventDefault();
	
	let inputs = this.querySelectorAll("input");
	let values = {};
	for (let i = 0; i < inputs.length; i++) {
		values[inputs[i].name] = inputs[i].value;
	}

	console-log ( values );
});