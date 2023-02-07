/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular
 y se debe alambra con tres hilos de alambre.

B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular 
y se debe alambra con tres hilos de alambre.

C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar
 cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
Federico Corbalán-Div X*/

function Rectangulo () 
{
    let largoTerreno;
    let anchoTerreno;
    let alambreTerreno;
    let perimetro;
    

    largoTerreno = parseFloat(document.getElementById("txtIdLargo").value);
    anchoTerreno = parseFloat(document.getElementById("txtIdAncho").value);
    radio = parseFloat(document.getElementById("txtIdRadio").value);

    perimetro = (largoTerreno+anchoTerreno)*2;
    
    alambreTerreno = perimetro*3;

    alert("Se deben comprar "+alambreTerreno+"M de alambre")


}
function Circulo () 
{
    let radioIngresado;
    let alambreTerreno;
    let perimetro;
    const PI = 3.14;

    radioIngresado = parseInt(document.getElementById("txtIdRadio").value);

    perimetro = 2 * PI * radioIngresado;
    alambreTerreno = perimetro*3;

    alert("Se deben comprar "+alambreTerreno+"M de alambre")
}

function Materiales () 
{
    let area 
    let bolsasCal;
    let bolsasCemento;
    let largoTerreno;
    let anchoTerreno;
    

    largoTerreno = parseFloat(document.getElementById("txtIdLargo").value);
    anchoTerreno = parseFloat(document.getElementById("txtIdAncho").value);
    area = largoTerreno*anchoTerreno;
    bolsasCemento = area*2;
    bolsasCal = area*3

    alert("Se necesitan "+bolsasCemento+ " bolsas de cemento y "+bolsasCal+" bolsas de cal")



}