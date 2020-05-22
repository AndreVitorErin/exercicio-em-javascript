// Somatório com do...While

var numAtual = 1;
var somatorio = 0;

do {
  somatorio += numAtual;
  numAtual++;
} while (numAtual <= 10);

console.log (`O número atual é igual a ${somatorio}`)
