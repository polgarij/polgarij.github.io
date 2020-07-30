let users = [
    ["Otto von Schwarz", "valami@gmail.com", "1234 Bp. Új u. 2.", "+36201234567", "hbtji!+!t6vgj"],
    ["Lady Marmelade", "ezmegaz@hotmail.com", "3300 Eger, Ősz u. 1.", "+36704567891", "lkjds4ou7cf2"],
    ["Frau Schafranek", "uj@yahoo.com", "6000 Pécs, Boszorkány u. 6.", "+36304560251", "eéo4f9875w"]
]
/*
let submitButton = document.querySelectorAll(".btn-modify");
submitButton.addEventListener("click", function() {
	console.log("Hello JS");
});



let orderForm = document.querySelector(".form-control");
orderForm.addEventListener("submit", function(ev) {
	ev.preventDefault();
	
	let inputs = this.querySelectorAll("input");
	let values = {};
	for (let i = 0; i < inputs.length; i++) {
		values[inputs[i].name] = inputs[i].value;
	}

	console.log ( values );
});
*/
let user1 = ["Kati", "email@email.hu", "4567 Alsószentgyörgy, Péter u. 4.", "+36512345678", "lidjgbuőer"];
let i = 0;
let container = document.querySelector("tr.new");
while (i > user1.length) {
    let input = document.createElement("input");
    input.innerHTML = user1[i];
    container.appendChild(input);
    i++;
}