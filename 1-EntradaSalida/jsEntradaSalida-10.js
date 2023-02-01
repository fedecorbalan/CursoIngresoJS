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
 
	importe = document.getElementById("txtIdImporte").value;
	

	importe=parseInt(importe);


// el calculo de porcentaje de un valor lo consigo multiplicando el num por el porcentaje y luego lo divido por 100

	descuentoImporte= importe * 25 / 100;
	nuevoImporte= importe - descuentoImporte;

	document.getElementById("txtIdResultado").value=nuevoImporte;

}
