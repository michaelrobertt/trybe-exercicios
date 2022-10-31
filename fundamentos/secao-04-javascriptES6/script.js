// Transforme a função hello em uma arrow function;

const hello = nome => `Olá, ${nome}`;

console.log(hello('Michael'))

// Transforme a função nomeCompleto em uma arrow function;

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;
console.log(nomeCompleto('Silvano', 'Sales'))

//Altere a expressão if/else utilizando ternary operator;

let speed = 90;
const speedCar = (speed) => (speed >= 120 ? `Você ultrapassou o limite de velocidade`:`Você está na velocidade permitida`);  

console.log(speedCar(speed));

// Crie uma função que calcule a área de um círculo.

let pi = 3.14
const circleArea = (raio) => 'Essa é a área do círculo: ' + (pi * raio ** 2);
console.log(circleArea(3))