/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
	let importe;
	let descuentoImporte;
	let nuevoImporte;
	let resultadoPrompt;

	importe = document.getElementById("txtIdImporte").value;
	
	importe = parseInt(importe);

	resultadoPrompt = prompt("Ingrese el descuento deseado") /100;
	// el calculo de porcentaje de un valor lo consigo multiplicando el num por el porcentaje y luego lo divido por 100

	descuentoImporte = importe * resultadoPrompt;

	nuevoImporte = importe - descuentoImporte;

	document.getElementById("txtIdResultado").value = "El total es $" + nuevoImporte;

}
