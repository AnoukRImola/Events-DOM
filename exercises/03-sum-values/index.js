window.calculateSumListener = function calculateSumListener() {
	//Return the value of the input #firstNumber
	var stringA = document.getElementById("firstNumber").value;
	//Return the value of the input #secondNumber
	var stringB = document.getElementById("secondNumber").value;

	//your code goes here
	var suma = Number(stringA) + Number(stringB); //Se usa la funcion Number(), para pasar un string a Numero
	document.querySelector("#resultNumber").value = suma; // Se le asigna el valor de suma a la caja resultado con un .value
};
