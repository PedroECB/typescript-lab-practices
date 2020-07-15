// let & const
let valor = true;
// function soma(){
//     var valor = 10
// }
// if(valor){
//     var variavel = 10
// }
// console.log(variavel)
const cpf = '023.321.654-21';
// cpf = '234.234.155.78'
console.log(cpf);
// let soma = (a, b) => a + b
// console.log(soma(23,2))
var frase = 'Hello World - Externo!';
function escreveFrase() {
    var frase = 'Hello World - Interno!';
    console.log(frase);
}
escreveFrase();
console.log(frase);
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log("Escrevendo o i externamente ao for");
console.log(i);
// for(let j=0;j<5;j++){
//     console.log(j)
// }
// console.log("Escrevendo o j externamente ao for")
// console.log(j)
// Arrow function - 
function somatorio(n1, n2) {
    return n1 + n2;
}
const subtrair = (a, b) => a - b;
console.log(somatorio(5, 3));
console.log(subtrair(10, 3));
const saudacao = () => console.log("Olá!");
saudacao();
const falarCom = (pessoa) => console.log("Olá " + pessoa);
falarCom('Pedro');
function normalComTHis() {
    console.log(this);
}
normalComTHis();
const normalComThisEspecial = normalComTHis.bind({ nome: 'Pedro', idade: 23 });
console.log(normalComThisEspecial());
console.log('------------- this global ----------------');
console.log(this);
console.log('---- this na arrow ------');
const arrrowComThis = () => console.log(this);
arrrowComThis();
// Parâmetros padrão
function contagemRegressiva(tempo = 1) {
    let i = 0;
    console.log('--- Inicializando a nossa contagem regressiva ---');
    let interval = setInterval(() => {
        console.log(i);
        i += tempo;
        if (i > 10) {
            clearInterval(interval);
        }
    }, tempo * 10);
    // if(tempo >= 10){
    //     clearInterval(interval)
    // }
}
// contagemRegressiva(1)
// Spread/Rest
let valores = [1, 2, 3, 4, 5];
let valores2 = [10, 12, 32];
let valores3 = ["Fruta 1", "Fruta2", ...valores, ...valores2];
console.log(valores3);
const turmaA = ["Miguel", "Luiz", "Matheus"];
const turmaB = ["Joana", "Maria", "Fernanda"];
const turmaC = [...turmaA, ...turmaB];
let carlos = 'Carlos';
function retornaArray(...args) {
    return args;
}
const values = [1, 8, 3, 5, 6];
console.log(Math.max(1, 8, 3, 5, 6));
console.log(Math.max(...values));
const arrayRetornado = retornaArray(1, 4, 5, 2, 8);
console.log(arrayRetornado.map((e) => e.toLocaleString('currency', {
    style: 'currency',
    currency: 'BRL',
    currencyDisplay: 'symbol'
})));
const num = 123;
console.log(new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    currencyDisplay: 'symbol'
}).format(num));
// Operador Rest/Spread com tuplas
const tupla = [1, 'Pedro', false];
function tuplaParam(a, b, c) {
    console.log(`1)a:${a}, b:${b}, c: ${c}`);
}
tuplaParam(...tupla);
function sumArgs(...args) {
    let soma = 0;
    console.log(Array.isArray(args));
    for (let i = 0; i < args.length; i++) {
        soma += args[i];
    }
    return soma;
}
console.log(sumArgs(4, 1, 1));
// Destructuring (array)
const caracteristicas = ["Aberto", 1987];
// const tipo = caracteristicas[0]
// const ano = caracteristicas[1]
const [tipo, ano] = caracteristicas;
console.log(tipo, ano);
// Destructuring (Objeto)
const item = {
    nome: 'SSD 128GB',
    preco: 677.0
};
// const nomeItem = item.nome
// const precoItem = item.preco
/*
    Para utilizarmos o destructuring em objetos, informamos o nome dos atributos do objeto que vamos utilizar
    seguido das variáveis que irão receber esse valor, em seguida fazemos a atribuição ao objeto que vamos retirar
    os atributos.
 */
const { nome: nomeItem, preco: precoItem } = item;
console.log(nomeItem, precoItem);
