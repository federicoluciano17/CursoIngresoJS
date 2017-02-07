function Mostrar()
{
//tomo la edad  
    var edad=document.getElementById("edad").value;
    if(edad>=13&&edad<=17){
        alert("eres adolescente")
    }
    else{
        if(edad<13){
            alert("eres niño")
        }
        else{
            alert("eres mayor de edad")}
    }





}//FIN DE LA FUNCIÓN