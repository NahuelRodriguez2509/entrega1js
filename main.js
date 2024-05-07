let nombreUsuario = prompt("Ingrese Nombre y Apellido");
alert("Hola " + nombreUsuario + ".");
console.log ("Hola " + nombreUsuario + ".");
let edad =prompt("ingrese su edad")
alert(edad)
console.log(edad)
if(edad<=18){alert("no puedes comprar algunas bebidas");
console.log("no puedes comprar algunas bebidas");}

else{alert("puedes comprar todas las bebidas");
console.log("puedes comprar todas las bebidas");}



const gaseosas = 1000
const vinos = 5000
const cervezas = 3000
const aguas = 500
const enegizantes = 1900
const jugos = 600

let cantidad; 
let nombreProducto;
let resultado;
let costoTotal;


function multiplicar(valor1, valor2){
    const resultado = valor1 * valor2;
    return resultado;
}

while (cantidad != 0){
    cantidad = parseInt(prompt("Ingrese la cantidad bebidas que desea comprar. 0 (cero), anula la compra"));
    
    if (cantidad === 0){
        break;
    }

nombreProducto = prompt("Ingrese la bebida que desea comprar:\n1- Si quiere gaseosas ingrese = 1 \n2- Si quiere  vinos ingrese = 2 \n3- Si quiere  cervezas ingrese = 3 \n4- Si quiere aguas ingrese = 4 \n5- Si quiere energizantes ingrese = 5 \n6- Si quiere jugos ingrese = 6 ");

switch (nombreProducto){
    case "1":
        resultado = multiplicar(gaseosas, cantidad);
        alert("Debe abonar $"+ resultado + " para comprar gaseosas");
        console.log ("Debe abonar $"+ resultado + " para comprar gaseosas");
        break;
    case "2":
        resultado = multiplicar(vinos, cantidad);
        alert("Debe abonar $"+ resultado + " para comprar vinos");
        console.log ("Debe abonar $"+ resultado + " para comprar vinos");
        break;
    case "3":
        resultado = multiplicar(cervezas, cantidad);
        alert("Debe abonar $ "+ resultado+ " para comprar cervezas");
        console.log ("Debe abonar $ "+ resultado+ " para comprar cervezas");
        break;
        case "4":
        resultado = multiplicar(aguas, cantidad);
        alert("Debe abonar $ "+ resultado+ " para comprar aguas");
        console.log ("Debe abonar $ "+ resultado+ " para comprar aguas");
        break;
        case "5":
        resultado = multiplicar(enegizantes, cantidad);
        alert("Debe abonar $ "+ resultado+ " para comprar enegizantes");
        console.log ("Debe abonar $ "+ resultado+ " para comprar enegizantes");
        break;
        case "6":
        resultado = multiplicar(jugos, cantidad);
        alert("Debe abonar $ "+ resultado+ " para comprar jugos");
        console.log ("Debe abonar $ "+ resultado+ " para comprar jugos");
        break;
    default:
        alert("No es posible realizar esta accion, indicar letra correspondiente del Producto que quiere comprar");
        console.log("No es posible realizar esta accion, indicar letra correspondiente del Producto que quiere comprar");
        break;
}

if (cantidad >= 5 ){
    costoDeEnvio = 0
    alert("El costo de envio esta bonificado $"+" "+ costoDeEnvio);
    console.log ("El costo de envio esta bonificado $"+ " "+ costoDeEnvio);
}
else if (cantidad <5 && cantidad >=3){
    costoDeEnvio = 5000
    alert("El costo de envio es $"+ costoDeEnvio);
    console.log ("El costo de envio es $"+ " "+ costoDeEnvio);
}
else if (cantidad >=1 && cantidad <3) {
    costoDeEnvio = 8000
    alert("El costo de envio es $"+ costoDeEnvio);
    console.log ("El costo de envio es $"+ " "+ costoDeEnvio);
}


function sumaTotal (resultado, costoDeEnvio){
    const costoTotal = resultado + costoDeEnvio;
    return costoTotal;
}

let costoTotal= sumaTotal(resultado, costoDeEnvio);
alert (nombreUsuario + " tu monto total a pagar es de $" + costoTotal + ".");
console.log (nombreUsuario + " tu monto total a pagar es de $ " + costoTotal + ".");
break;
}