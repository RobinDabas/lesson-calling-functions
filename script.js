//Calling a Function: To use the function, you “call” it by writing its name followed by parentheses ().

function decíQuiubo() {
  console.log('¡Quiubo, Roberto!')
}
decíQuiubo();

//Parameters and Arguments: 
//01 Parameters are like placeholders in the function for data you’ll provide later.
//02 Arguments are the actual values you give when calling the function.

function saludá(nombre) {
  console.log('¡Quiubo, ' + nombre + '!')
}
saludá('María');


//Return Statements: A function can give back a result using return. Once return runs, the function stops.

function sumá(a, b) {
  return a + b;
}
let resultado = sumá(4, 5);
console.log(resultado);

//Function Expressions: You can store a function in a variable instead of giving it a name.

const multiplicá = function(a, b) {
  return a * b;
}
console.log(multiplicá(4, 5));

//Arrow Functions (a modern, shorter way): Use => to write functions more concisely.

const restá = (a,b) => a - b;
console.log(restá(10, 5));


//***Practice Exercises to Reinforce Concepts***

//Exercise 01: Basic Function and Calling
function decíMiNombre(nombre) {
  console.log('Roberto')
}
decíMiNombre();
decíMiNombre();
decíMiNombre();

//Exercise 02: Function with Parameters
function bienvenido(persona1, persona2) {
  console.log('¡Bienvenido ' + persona1 + ' y ' + persona2 + '!')
}
bienvenido('Benito', 'Cristofer');


//Exercise 03: Function with Return
function cuadrado(número) {
  return número * número;
}
let respuesta = cuadrado(10);
console.log(respuesta);

//Exercise 04: Arrow Function Practice
const square = (num) => num * num;
console.log(square(3), square(5));

//Exercuse 05: Real World Scenario
function calculáElTotal(precio, cantidad) {
  return precio * cantidad;
}
let precioTotal = calculáElTotal(20, 3)
console.log(precioTotal);
