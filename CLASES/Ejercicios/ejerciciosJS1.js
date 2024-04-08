
// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola Fede";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 192;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;



let devolverString = str => str;
console.log(devolverString("Cadena de texto"));


let suma = (x, y) => x + y;
console.log(suma(10, 5));


let resta = (x, y) => x - y;
console.log(resta(10, 5));

let multiplica = (x, y) => x * y;
console.log(multiplica(10, 5));

let divide = (x, y) => x / y;
console.log(divide(10, 5));

const sonIguales = (x, y) => (x === y ? true : false); console.log(sonIguales(10, 10));
/* if (x===y){
return true
}else{
  return false
} */

const tienenMismaLongitud = (str1, str2) => str1.length === str2.length;
console.log(tienenMismaLongitud("1234", "doce"));

const menosQueNoventa = (num) => num < 90; console.log(menosQueNoventa(89));

const mayorQueCincuenta = (num) => num > 50; console.log(mayorQueCincuenta(55));

const obtenerResto = (x, y) => x % y; console.log(obtenerResto(22, 7));

const esPar = num => num % 2 === 0; console.log(esPar(5));

const esImpar = num => num % 2 !== 0; console.log(esImpar(5));

const elevarAlCuadrado = num => num * num; console.log(elevarAlCuadrado(4));

const elevarAlCubo = num => num * num * num; console.log(elevarAlCubo(4));


const elevar = (num, exponent) => Math.pow(num, exponent); console.log(elevar(4, 3));

const redondearNumero = num => Math.round(num); console.log(redondearNumero(1.4));

const redondearHaciaArriba = num => Math.ceil(num); console.log(redondearHaciaArriba(6.9));

const numeroRandom = () => Math.random(); console.log(numeroRandom());
{
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()

}

const esPositivo = numero => numero === 0 ? false : numero > 0 ? "Es positivo" : "Es negativo"; console.log(esPositivo(0));
{
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false

}

const agregarSimboloExclamacion = (str) => str + "!"; console.log(agregarSimboloExclamacion("Hola"));
const agregarSimboloExclamacion2 = (str) => '${str}!'; console.log(agregarSimboloExclamacion("Hola"));

{
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:

}

const combinarNombres = (nombre, apellido) => nombre + " " + apellido; console.log(combinarNombres("Federico", "De Filippi"));
const combinarNombres2 = (nombre, apellido) => '${nombre} ${apellido}'; console.log(combinarNombres("Federico", "De Filippi"));

{
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:

}
const obtenerSaludo = (nombre) => "Hola " + nombre + "!"; console.log(obtenerSaludo("Federico"));
const obtenerSaludo2 = (nombre) => 'Hola ${nombre} !'; console.log(obtenerSaludo("Federico"));

{
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:

}

const obtenerAreaRectangulo = (alto, ancho) => alto * ancho; console.log(obtenerAreaRectangulo(10, 5));
{
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:

}

const retornarPerimetro = (lado) => lado * 4; console.log(retornarPerimetro(10));
{
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí

}

const areaDelTriangulo = (base, altura) => (base * altura) / 2; console.log(areaDelTriangulo(10, 5));
{
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
}

const deEuroAdolar = euro => euro * 1.20; console.log(deEuroAdolar(10));
{
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí

}

//const esVocal = letra => ?letra.length!=1:ingresaste mas de una letra? letra.match(/[aeiou]/i)? Es vocal : Dato Incorrecto;console.log(esVocal("e"));
const esVocal = (letra) => {
  let vocales = ["a", "e", "i", "o", "u"];
  if (letra.length === 1) {
    for (i = 0; i < vocales.length; i++) {
      if (letra.toLowerCase() == vocales[i]) {
        return "es vocal";
      }
    }
    return `dato incorrecto ingresaste un caracter incorrecto es la ${letra}`

  } return `Dato Incorrecto ingresaste mas de un caracter ingresaste ${letra}`

};
console.log(esVocal("ph"));
//Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
//Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle
//que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
//si ingresa una consonante muestre en pantalla dato incorrecto
//Escribe tu código aquí



