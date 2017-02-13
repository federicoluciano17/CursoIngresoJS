function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño){
    default:
        alert("Falta para el invierno")
        break;
    case"Julio":
    case"Agosto":
        alert("Abrigate que hace frío")
        break;
    case"Septiembre":
    case"Octubre":
    case"Noviembre":
    case"Diciembre":
        alert("Ya pasamos el Frío, ahora el calor")
        break;
    

   
}





}//FIN DE LA FUNCIÓN