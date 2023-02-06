// Federico Corbalán-Div X
function mostrar()
{

	let edad;

	edad = parseInt (document.getElementById ("txtIdEdad").value);
  
	if (edad < 13 || edad > 17)
	{	
		alert ("Usted no es adolescente")
	  }
	  else{
		alert("Usted es adolescente")
	}
	
	
  
}