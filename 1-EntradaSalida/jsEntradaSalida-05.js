/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	
	//
	// txtIdEdad 
	let todoJunto
	let nombre
	let edad

	nombre=document.getElementById("txtIdNombre").value
	edad=document.getElementById("txtIdEdad").value
	
	// todoJunto= " Usted se llama "+nombre+" y tiene "+edad+" años "
	alert(`Usted se llama ${nombre} y tiene ${edad} años`)
	// alert(todoJunto)
	
	
	// alert("ok");


}

