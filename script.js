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


//***Yesterday's Lesson Recap***

//1. Basic Function Calling

function decíAdiós(suNombre) {
  console.log('Adiós ' + suNombre + '.' + ' Nosotros esperamos verte pronto.')
}

decíAdiós('Pablo');

//2. Function with Return

function plan(presupuesto) {
  return presupuesto + presupuesto;
}
 let presupuestoTailandía = plan(1250);
 console.log('Vos tenés un presupuesto para un viaje a Tailandia de ' + '$' + presupuestoTailandía + ' CAD.');

 //3. Arrow Function

 const suPresupuesto = (dólares) => dólares * 2;
 let cantidadInicial = 1250;
 let presupuestoDuplicado = suPresupuesto(cantidadInicial);
 console.log('Mi presupuesto para mi viaje de 2 meses a Tailandia es ' + '$' + presupuestoDuplicado)


//Bonus practice to renforce the Arrow Function concept

const facturaDelRestaurante = (recibo) => recibo * 2;
let facturaInicial = 80;
let facturaDuplicado = facturaDelRestaurante(facturaInicial);

console.log ('Pagué ' + '$' + facturaDuplicado + '.00 CAD' + ' por nuestra comida en el restaurante, Libya, A Taste of Arabia. Nos encantó el cordero Kebsa y el plato beduino Al-Mathrooda.');


//Building and calling Function with Arrays

//Print Array Elements:

function listaDeDestinos(arr) {
  for (let i = 0; i < arr.length; ++i) {
    console.log(arr[i]);
  }
}
let destinos = ['¡Ciudades que quiero visitar!','Bangkok, Tailandía', 'Ho Chi Minh, Vietnam','Kuala Lumpur, Malasia', 'Vientiene, Laos','Jakarta, Indonesia','Medellín, Colombia', 'San Juan, Puerto Rico'];
listaDeDestinos(destinos);

//Reinforced concept of For Loops and Arrays

function ciudadesTailandía(arr) {
  for (let t = 0; t < arr.length; ++t) {
    console.log(arr[t])
  }
}
let ciudades = ['¡Ciudades que quiero visitar en Tailandia!','Bangkok', 'Phuket', 'Pattaya', 'Chiang Mai', 'Lampang', 'Chiang Rai', 'Udon Thani', 'Pattani', 'Hat Yai'];
ciudadesTailandía(ciudades);

//I just reviewed how each part of this exercise works and I understand it so much better

//27th of May - Array with numbered output

function ciudadesDeMalasia(arr) {
  for (let m = 0; m < arr.length; ++m) {
    console.log(m + 1, arr[m]);
  }
}
ciudadesDeMalasia(['Kuala lumpur', 'Malacca', 'Ipoh']);



function paisesAsiaticos(arr) {
  for (let p = 0; p < arr.length; ++p) {
    console.log(p + 1, arr[p]);
  }
}
paisesAsiaticos(['Thailand', 'Vietnam', 'Laos', 'Malaysia']);


//Conditional Output

function saludáDestinos(arr) {
  for (s = 0; s < arr.length; ++s) {
    if (arr[s] === 'Tailandia') {
      console.log(s + 1, '¡Mi favorito!')
    } else {
      console.log(s + 1, '¡Quiubo, ' + arr[s] + '!')
    }
  }
}
saludáDestinos(['Tailandia', 'Colombia', 'Vietnam']);


//Conditional Output

function listaFrutas(arr) {
  for (f = 0; f < arr.length; ++f) {
    if (arr[f] === 'piña') {
      console.log(f + 1, '¡Mi favorito!')
    } else {
      console.log(f + 1, arr[f])
    }
  }
}
listaFrutas(['piña', 'mango', 'naranja', 'guineo', 'sandía']);

//Exercise: Practicing with functions

function encontráLaLetra(palabra, emparejar) {
  for (let l = 0; l < palabra.length; ++l) {
    if (palabra[l] === emparejar) {
      console.log(`Encontré ${emparejar} en la posicion ${l}`)
    }
  }
}
encontráLaLetra('paisa', 'a')


function findLetter (word, match) {  
  for (let d = 0; d < word.length; ++d) {
    if (word[d] === match) {
      console.log(`I found ${match} in the position ${d}`)
    }
   }
 }
findLetter ('colombian', 'o')










function locateLetter(letter, find) {
  for (let o = 0; o < letter.length; ++o) {
    if (letter[o] === find) {
      console.log(`I found ${find} in the position ${o}`)
    }
  }
}
locateLetter('Thailand', 'a')


