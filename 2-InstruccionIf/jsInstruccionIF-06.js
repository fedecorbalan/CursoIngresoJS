// Federico Corbalán-Div X
function mostrar()
{
	let edad;

	edad = parseInt (document.getElementById ("txtIdEdad").value);
  
	if (edad >=18)
	{	
		alert ("Usted es mayor de edad");
	  }
	else{
		if (edad < 13 )
		{	
			alert ("Usted es un niño");
	 	}
		else
	  	{	
			alert ("Usted es adolescente");
		}
		}
}
// && edad <= 17