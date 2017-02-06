/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{
    var edad;
    edad = document.getElementById("laEdad").value;
    var nombre;
    nombre = document.getElementById("elNombre").value;
    var mensaje;
    mensaje = "usted se llama " + nombre + " y su edad es " + edad
    alert(mensaje)
	
}

