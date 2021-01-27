window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
	oyente(); //Se llama a la funcion oyente
};

//the listener function here
function oyente() {
	let button = document.querySelector("#theGreen"); //Se optione el valor del elemento
	button.addEventListener("click", function() {
		//Se crea una funcion listener, la cual al darle click al boton verde lanzara una alerta
		alert("wuju");
	});
}
