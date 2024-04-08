

let obtenerMayor = (x, y) => Math.max(x, y); console.log(obtenerMayor(6, 2));
{
  // "x" e "y" son números enteros .
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  /* Metodos de MAth */

}

let mayoriaDeEdad = edad => edad >= 18 ? "Allowed" : "Not allowed"; console.log(mayoriaDeEdad(20))
{
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"

}

let conection = status => status === 1 ? "Online" : status === 2 ? "Away" : "Offline"; console.log(conection(5))
{
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.

}

let saludo = idioma => idioma === "aleman" ? "Guten Tag!" : idioma === "mandarin" ? "Ni Hao!" : idioma === "ingles" ? "Hello!" : "Hola!"; console.log(saludo("ingles"))
{
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:

}

//let colors=color => color=== "blue"? "This is blue": color==="red"? "This is red": color==="green"? "This is green": color==="orange"? "This is orange": "Color not found"; console.log(colors("orange"))
let colors = (color) => {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuelve --> "This is blue"
  //En caso que el color recibido sea "red", devuelve --> "This is red"
  //En caso que el color recibido sea "green", devuelve --> "This is green"
  //En caso que el color recibido sea "orange", devuelve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch (color) {
    case "blue":
      return "This is blue";
    case "red":
      return "This is red";
    case "green":
      return "This is green";
    case "orange":
      return "This is orange";
    default:
      return "Color not found";
  }

}
console.log(colors("orange"));

let esDiezOCinco = numero => numero === 10 || numero === 5; console.log(esDiezOCinco(10));
{
 // switch (numero) {

  //}
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:

}

let estaEnRango = numero => numero < 50 && numero > 20; console.log(estaEnRango(25))
{
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:

}

let esEntero = numero => numero === Math.floor(numero); console.log(esEntero(5));
{
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:

}

let fizzBuzz = numero => {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  };
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero

}
console.log(fizzBuzz(5));

let operadoresLogicos = (num1, num2, num3) => {
  switch (true) {
    case num1 === 0 || num2 === 0 || num3 === 0:
      return "Error";
    case num1 < 0 || num2 < 0 || num3 < 0:
      return "Hay negativos";
    case num1 > num2 && num1 > num3:
      return "Número 1 es mayor y positivo";
    case num3 > num1 && num3 > num2:
      return num3 + 1;
    default:
      return false;
  }
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 

};
console.log(operadoresLogicos(5, 1, 9));

let esPrimo = (numero) =>
 {
  if (numero < 2) {
    return false;
}
for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
        return false;
    }
}
return true;
}
console.log(esPrimo(5));

// Ejemplos de uso:
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

let esVerdadero= valor => valor === 5 ? "Soy verdadero" : "Soy falso"; console.log(esVerdadero(5));
 {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí

}

let tablaDelSeis=()=> {
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  const tabla = [];
  for (let i = 0; i <= 10; i++) {
      tabla.push(6 * i);
  }
  return tabla;
};
console.log(tablaDelSeis());

let tieneTresDigitos = numero => {
  //Leer un número entero y determinar si tiene 3 dígitos.
  //Escribe tu código aquí
  const numeroTresDigitos = numero.toString();

  // Verificamos si la longitud de la cadena es igual a 3
  if (numeroTresDigitos.length === 3) {
      return true;
  } else {
      return false;
  }
};console.log(tieneTresDigitos(456));
let tieneTresDigitos2 = numero =>
{
  //Leer un número entero y determinar si tiene 3 dígitos.
  //Escribe tu código aquí
  
  if (numero >99 && numero< 1000) {
      return true;
  } else {
      return false;
  }
};console.log(tieneTresDigitos2(46));


function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.

}

