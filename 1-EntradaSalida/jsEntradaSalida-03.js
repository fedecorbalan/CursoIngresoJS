/*Federico Corbalán Div-X*/
function mostrar()
{
	let valorIngresado; 
	let valorIva
	let descuentoMayorista
	let valorDescuento
	let ivaTotal
	let valorTotal
	let descuentoIVA
	const IVA= 0.21
	const DESCUENTO= 0.05
	
	valorIngresado = parseFloat(document.getElementById("txtIdNombre").value);
	
	descuentoMayorista= valorIngresado * DESCUENTO
	valorDescuento= valorIngresado- descuentoMayorista
	
	valorIva = valorIngresado * IVA
	ivaTotal= (valorIva + valorIngresado).toFixed(2)

	descuentoIVA= ivaTotal * DESCUENTO
	valorTotal= (ivaTotal - descuentoIVA).toFixed(2)
 	


	alert("El importe bruto es $"+ valorIngresado+"\nEl iva es del 21%"+"\nEl importe con iva es $"+ ivaTotal+ "\nEl descuento es del 5%"+ "\nEl total a pagar es $"+valorTotal);

}


// \