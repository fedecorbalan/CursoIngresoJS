/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let aumentoSueldo;
	let nuevoSueldo;
 
	sueldo = document.getElementById("txtIdSueldo").value;
	

	sueldo=parseInt(sueldo);


// el calculo de porcentaje de un valor lo consigo multiplicando el num por el porcentaje y luego lo divido por 100

	aumentoSueldo= sueldo * 10 / 100;
	nuevoSueldo= sueldo + aumentoSueldo;

	document.getElementById("txtIdResultado").value=nuevoSueldo;
	

}
