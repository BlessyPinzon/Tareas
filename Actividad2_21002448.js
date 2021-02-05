// Declarar la variable mes y darle valor de 10
var Mes = 10;

/*El valor del mes entre 12 y 2 (12, 1 o 2) “es invierno”, 
3 y 5,  “es primavera”, 
6 y 8 que imprima en pantalla “es verano” 
9 y 11 que imprima en pantalla “es otoño” */
    
var Mes;
var Estacion = prompt("Ingrese numero del mes");
switch(Estacion) {
  case "1":
    alert("Enero es invierno");
    break;
  case "2":
    alert("Febrero es invierno");
    break;
  case "3":
    alert("Marzo es primavera");
    break;
  case "4":
    alert("Abril es primavera");
    break;
  case "5":
    alert("Mayo es primavera");
    break;
  case "6":
    alert("Junio es verano");
    break;
  case "7":
    alert("Julio es verano");
    break;
  case "8":
    alert("Agosto es verano");
    break;
  case "9":
    alert("Septiembre es otoño");
    break;
  case "10":
    alert("Octubre es otoño");
    break;
  case "11":
    alert("Noviembre es otoño");
    break;
  case "12":
    alert("Diciembre es invierno");
    break;
  default:
    alert("Intente de nuevo, no es un mes del año");
    break;
}

var nombre = alert ("Mi nombre es Blessy Jireh Pinzón Estrada, número de carné 21002448");