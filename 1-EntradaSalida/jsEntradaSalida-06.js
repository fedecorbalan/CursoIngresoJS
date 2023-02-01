/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"
Federico Corbalán Div-X*/
function sumar()
{

// txtIdNumeroUno
let numeroUno;
let numeroDos;
let resultado;


numeroUno = document.getElementById("txtIdNumeroUno").value;
numeroDos = document.getElementById("txtIdNumeroDos").value;

numeroUno=parseInt(numeroUno);
numeroDos=parseInt(numeroDos);

resultado= numeroUno + numeroDos ;
	 
alert(resultado);




}

