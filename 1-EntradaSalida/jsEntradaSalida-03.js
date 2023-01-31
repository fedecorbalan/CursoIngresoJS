/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
// var es una variable global y esta prohibida
{
	let nombreIngresado; //variable local

	
	nombreIngresado = document.getElementById("txtIdNombre").value;
	// nombreIngresado=txtIdNombre.value;


	alert(nombreIngresado);

}


