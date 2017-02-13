function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño){
    case"Enero":
    case"Marzo":
    case"Abril":
    case"Mayo":
    case"Junio":
    case"Julio":
    case"Agosto":
    case"Septiembre":
    case"Octubre":
    case"Noviembre":
    case"Diciembre":
        alert("Este mes tiene 30 o mas Días")
        break;
    case"Febrero":
        alert("Este mes tiene 28 Días")
        break;
    
}
	
	


}//FIN DE LA FUNCIÓN