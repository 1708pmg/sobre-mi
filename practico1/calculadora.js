function Calcular(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let operador = document.getElementById("opciones").value
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = document.getElementById("resultado");
    
    //si los operandos no son numeros o estan vacios alerta sobre el error//
    if (isNaN(num1) || isNaN(num2)){
        alert ("Ingrese numeros");
        return resultado.textContent = "Error";
    }
   
    resultado = 0
    switch (operador) {
        case "suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;
        case "multiplicacion":
            resultado = num1 * num2;
            break;
        case "division":
            //Si el usuario divide por cero, muestra un mensaje indicando error//
            if (num2 !== 0){
                resultado = num1 / num2 ;}
                else { 
                    resultado = "Error, no se puede dividir por 0";}
            break;
    }

    document.getElementById("resultado").innerHTML = resultado;
}
//Si el resultado de una operación es demasiado grande o pequeño indica error//
// No lo puedo solucionar: pongo return, saco return, y la calculadora se traba,//
// no calculacula, no borra, no hace nada //
        /*if(resultado === Infinity{
            resultado.textContent = "El resultado es demasiado grande";
        }
        else if ( resultado === -Infinity){
            resultado.textContent = "El resultado es demasiado pequeño";
        }
        else {
            return;
        }*/

function borrar(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").innerHTML = "Resultado";
    document.getElementById("miCalculadora").reset;
}
