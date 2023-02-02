/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let numUno;
    let numDos;
    let numTres;
    let resultado

    numUno= parseInt(document.getElementById("txtIdPrecioUno").value);
    numDos= parseInt(document.getElementById("txtIdPrecioDos").value);
    numTres= parseInt(document.getElementById("txtIdPrecioTres").value);

   resultado= numUno+numDos+numTres
   
    alert("La suma es "+ resultado)
    


    
}
function Promedio () 
{
    let numUno;
    let numDos;
    let numTres;
    let promedio

    numUno= parseFloat(document.getElementById("txtIdPrecioUno").value);
    numDos= parseFloat(document.getElementById("txtIdPrecioDos").value);
    numTres= parseFloat(document.getElementById("txtIdPrecioTres").value);

    promedio= ((numUno+numDos+numTres)/3).toFixed(2)

    alert("El promedio es "+promedio)


}
function PrecioFinal () 
{
	let numUno;
    let numDos;
    let numTres;
    let resultado;
    let suma;
    let ivaTotal
    const IVA= 0.21

    numUno= parseFloat(document.getElementById("txtIdPrecioUno").value);
    numDos= parseFloat(document.getElementById("txtIdPrecioDos").value);
    numTres= parseFloat(document.getElementById("txtIdPrecioTres").value);

   suma= (numUno+numDos+numTres)
   ivaTotal= suma* IVA
   resultado= (suma+ivaTotal).toFixed(2)
   
    alert("El precio final es "+ resultado)
}