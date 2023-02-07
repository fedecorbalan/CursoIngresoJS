/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con 
un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit 
(ej.: "0  centígrados son 32 Fahrenheit ").
Federico Corbalán Div-X*/
function FahrenheitCentigrados () 
{
	let tempF
    let tempC
    
    tempF = parseFloat(document.getElementById("txtIdTemperatura").value).toFixed(1);
    tempC = ((tempF - 32)/1.8).toFixed(1);

    alert(tempF + " Fahrenheit son "+ tempC + " grados Celsius")
}

function CentigradosFahrenheit () 
{
	let tempF
    let tempC
    
    tempC = parseFloat(document.getElementById("txtIdTemperatura").value).toFixed(1);
    tempF = ((tempC * 1.8)+ 32).toFixed(1);

    alert(tempC + " grados Celsius son "+ tempF + " Fahrenheit")
}
