var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;
var rachaPerdidas=0
var rachaGanadas=0
var rachaEmpates=0

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 	numeroSecreto =Math.floor(Math.random()*3)+1;
		//alert(numeroSecreto);
		switch(numeroSecreto)
		{
			case 1:
				eleccionMaquina="piedra";
				break;
			case 2:
				eleccionMaquina="papel";
				break;
			case 3:
				eleccionMaquina="tijera";
				break;
		}
		//alert(eleccionMaquina);



}//FIN DE LA FUNCIÓN
function piedra()
{
	alert("la maquina selecciono: "+eleccionMaquina);
	eleccionHumano="piedra";
	if(eleccionHumano==eleccionMaquina)
	{
		alert("empate.");	
		ContadorDeEmpates++;
		rachaEmpates++;
		rachaGanadas=0;
		rachaPerdidas=0;
	}
	else if(eleccionMaquina=="tijera")
	{
		alert("ganaste.");
		ContadorDeGanadas++;
		rachaEmpates=0;
		rachaGanadas++;
		rachaPerdidas=0;
	}
	else
	{
		alert("perdiste.");
		ContadorDePerdidas++;
		rachaEmpates=0;
		rachaGanadas=0;
		rachaPerdidas++;
	}
	informar()

mostarResultado();

}//FIN DE LA FUNCIÓN
function papel()
{
	alert("la maquina selecciono: "+eleccionMaquina);
	eleccionHumano="papel";
	if(eleccionHumano==eleccionMaquina)
	{
		alert("empate.");
		ContadorDeEmpates++;
		rachaEmpates++;
		rachaGanadas=0;
		rachaPerdidas=0;		
	}
	else if(eleccionMaquina=="piedra")
	{
		alert("vos ganastes.");
		ContadorDeGanadas++;
		rachaEmpates=0;
		rachaGanadas++;
		rachaPerdidas=0;
	}
	else
	{
		alert("ganó la Maquina.");
		ContadorDePerdidas++;
		rachaEmpates=0;
		rachaGanadas=0;
		rachaPerdidas++;
	}
	informar()
mostarResultado();
}//FIN DE LA FUNCIÓN
function tijera()
{
	alert("la maquina selecciono: "+eleccionMaquina);
	eleccionHumano="tijera";
	if(eleccionHumano==eleccionMaquina)
	{
		alert("empate.");
		ContadorDeEmpates++;
		rachaEmpates++;
		rachaGanadas=0;
		rachaPerdidas=0;		
	}
	else if(eleccionMaquina=="papel")
	{
		alert("vos ganastes.");
		ContadorDeGanadas++;
		rachaEmpates=0;
		rachaGanadas++;
		rachaPerdidas=0;
	}
	else
	{
		alert("ganó la Maquina.");
		ContadorDePerdidas++;
		rachaEmpates=0;
		rachaGanadas=0;
		rachaPerdidas++;
	}
	informar()
mostarResultado();
}//FIN DE LA FUNCIÓN

function mostarResultado()
{

document.getElementById('empatadas').value=ContadorDeEmpates + " partidas empatadas.";
document.getElementById('perdidas').value=ContadorDePerdidas + " partidas perdidas.";
document.getElementById('ganadas').value=ContadorDeGanadas + " partidas ganadas.";

comenzar();
}

function informar()
{

console.log("gano"+rachaGanadas);
console.log("empato"+rachaEmpates);
console.log("perdio"+rachaPerdidas);
console.log("Racha Ganada"+rachaGanadas);
console.log("Racha Empates"+rachaEmpates);
console.log("Racha Perdidas"+rachaPerdidas);
console.log("racha maxima ganadas"+rachaGanadas);
console.log("racha maxima empates"+rachaEmpates);
console.log("racha maxima perdidas"+rachaPerdidas);
}