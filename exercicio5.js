let inputString = "Olá, mundo!";
let outputString = "";

for (let i = inputString.length - 1; i >= 0; i--) {
    outputString += inputString[i];
}

console.log(outputString);