const num = parseInt(prompt("Informe um número inteiro: "));

if (num < 0) {
    console.log("O número informado não pode ser negativo.");
}

let a = 0;
let b = 1;

if (num === 0 || num === 1) {
    console.log(`${num} pertence à sequência de Fibonacci.`);
}

let nextFib = a + b;

while (nextFib <= num) {
    if (nextFib === num) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
    }
    a = b;
    b = nextFib;
    nextFib = a + b;
}

console.log(`${num} não pertence à sequência de Fibonacci.`);