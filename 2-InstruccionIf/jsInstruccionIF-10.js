// Federico Corbalán-Div X
function mostrar()
{
	let numRandom
	
	numRandom = Math.ceil(Math.random()*10)

	if (numRandom <4 ){
		alert(numRandom+"\nVamos, la proxima se puede")
	}
	else{
		if (numRandom <= 8){
			alert(numRandom+"\nAPROBÓ")
		} 
		else{
			alert(numRandom+"\nEXCELENTE")
		}
	}
}