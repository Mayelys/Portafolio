// js/script.js
console.log("Hola, mundo desde un archivo externo!");

console.log("hola,mundo!");
let cadena = "Hola, mundo!";
let numero = 42;
let logico = true;
let nulo = null;
let indefinido = undefined;
let simbolo = Symbol("foo");
console.log(cadena,numero,logico,nulo,indefinido);
let objeto = {nombre: "Jaime", edad: 37};
let arreglo = [1, 2, 3, 4, 5];

function suma(a, b) {
  return a + b;
}

let fecha = new Date();
let patron = /ab+c/;
let error = new Error("Error de prueba");

console.table(objeto);
console.table(arreglo);
console.log(suma(38,7));
console.log(fecha);

function suma(a, b) {
  return a + b;
}

let a = 5;
let b = 3;

let resultado = ((a + b - 2) * 3) / 2;
console.log(resultado); // 9
resultado += 1;

console.log(a > b); // true
console.log(a === b); // false, se compara el valor y el tipo

console.log(resultado % 3 == 0 ? "👍" : "👎");

let cadena2 = "Hola, " + "mundo!";

console.log(cadena2); // Hola, mundo!


let anio = prompt("En que año naciste?");
let anio_actual = new Date().getFullYear();
let edad = anio_actual - anio;

if (edad >= 18) {
  console.info("Eres mayor de edad");
} else if (edad >= 12 && edad < 18) {
  if (edad == 12) {
    console.log("Eres un preadolescente");
  } else {
    console.log("Eres un adolescente");
  }
} else {
  console.warn("Eres un niño");
}

let dia = prompt("Ingresa un número del 1 al 7");

switch (dia) {
case 1:
  console.log("Lunes");
break;
case 2:
  console.log("Martes");
break;
case 3:
  console.log("Miércoles");
break;
default:
  console.error("Día no válido");
}


let resta = function (a, b) {
return a - b;
};

console.log(resta(5, 3)); // 2


let multiplicacion = (a, b) => a * b;

console.log(multiplicacion(5, 3)); // 15


let objeto2 = {
nombre: "Jaime",
saludar: function () {
setTimeout(() => {
console.log(`Hola, soy ${this.nombre}`);
}, 1000);
},
};

objeto2.saludar();

let frutas = ["🍎","🍐","🍇","🍓"];


frutas.push("🥭");
frutas.unshift("🍌");
frutas.pop();
console.log(frutas); // 🍌, 🍎, 🍐, 🍇,🍓

let frutas2 = frutas.slice(1, 3);
console.log(frutas2.join(" - ")); // 🍎 - 🍐
console.log(frutas.length); // 5
console.log(frutas.indexOf("🍇")); // 3

let frutas3 = frutas.map((fruta) => fruta +"🍉");
console.table(frutas3);