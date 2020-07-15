/* Utilizar recursos do ES6 e/ou TS pra rescrever os códigos abaixo */
// Exercicio 1
// var dobro = function(valor) {
//     return valor * 2
// }
let dobro = (valor) => valor * 2;
console.log(dobro(10));
// Exercicio 2
// var dizerOla = function (nome) {
//     if (nome === undefined) { nome = "Pessoa" }
//     console.log("Ola, " + nome)
// }
let dizerOla = (nome = 'Pessoa') => console.log(`Olá, ${nome}`);
dizerOla();
dizerOla("Anna");
// Exercicio 3 -> Escrever o menor valor do array
// var nums = [-3, 33, 38, 5]
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
// Exercicio 4 -> Adicionar todos os elementos de 'nums' em array
// var arr = [55, 20]
const arr = [55, 20, ...nums];
console.log(arr);
// Exercicio 5
// var notas = [8.5, 6.3, 9.4]
// var notas1 = notas[0]
// var notas2 = notas[1]
// var notas3 = notas[2] 
// console.log(nota1, nota2, nota3)
let notas2 = [8.5, 6.3, 9.4];
let [nota1, nota2, nota3] = notas2;
console.log(nota1, nota2, nota3);
// Exercicio 6
// var cientista = {primeiroNome: "Will", experiencia: 12}
// var primeiroNome = cientista.primeiroNome
// var experiencia = cientista.experiencia
// console.log(primeiroNome, experiencia)
const cientista = { primeiroNome: "Will", experiencia: 12 };
const { primeiroNome: primeiroNome, experiencia: experiencia } = cientista;
console.log(primeiroNome, experiencia);
