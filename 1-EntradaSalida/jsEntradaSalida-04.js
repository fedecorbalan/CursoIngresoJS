/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// se declara la variable
	let nombreIngresado;
	
	// se asigna la variable al prompt
	nombreIngresado=prompt("Ingrese su nombre");
	
	// se asigna el id.value a la variable para que
	// se muestre el dato por id
	document.getElementById("txtIdNombre").value = nombreIngresado ;
	
	// alert(nombreIngresado);
}

