/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()

{var eleccionMaquina=math.floor(math.random()*(4-1))+1;
console.log(eleccionMaquina)
	
}//FIN DE LA FUNCIÓN
function piedra()
{
	alert("la maquina selecciono: "+eleccionMaquina);
	eleccionHumano="piedra";
	if(eleccionHumano==eleccionMaquina)
	{
		alert("empate.");	
		ContadorDeEmpates++;	
	}
	else if(eleccionMaquina=="tijera")
	{
		alert("ganaste.");
		ContadorDeGanadas++;
	}
	else
	{
		alert("perdiste.");
		ContadorDePerdidas++;
	}
}//FIN DE LA FUNCIÓN
function papel()
{
switch(eleccionMaquina){
    case 1:
        alert("ganó");
        break;
    case 2:
        alert("empató");
        break;
    default:
        alert("perdió")
}
}//FIN DE LA FUNCIÓN
function tijera()
{
switch(eleccionMaquina){
    case 1:
        alert("perdió");
        break;
    case 2:
        alert("ganó");
        break;
    default:
        alert("empató")
}
}//FIN DE LA FUNCIÓN