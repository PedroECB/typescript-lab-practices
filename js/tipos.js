//  string
let nome = "Pedro";
//  numbers
let idade = 23;
idade = 23.2;
console.log(`A minha idade é: ${idade}`);
//  boolean
let maiorIdade = false;
console.log(typeof maiorIdade);
console.log(maiorIdade);
let minhaIdade;
minhaIdade = 24;
console.log(typeof minhaIdade);
minhaIdade = "Idade: 23";
console.log(typeof minhaIdade);
console.log(minhaIdade);
//  array
let frutas = ["Manga", "Uva", "Banana"];
console.log(typeof frutas);
console.log(frutas[2]);
frutas = [23, 423, 65];
console.log(typeof frutas);
console.log(frutas);
frutas.forEach((value) => console.log(`R$ ${value.toFixed(2).replace('.', ',')}`));
// tuplas
let endereco = ["Av Joana Angelica", 32, "Bloco C"];
console.log(endereco);
//enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 200] = "Verde";
    Cor[Cor["Azul"] = 201] = "Azul";
    Cor[Cor["Amarelo"] = 202] = "Amarelo";
    Cor[Cor["Marrom"] = 203] = "Marrom";
})(Cor || (Cor = {}));
let minhaCor = Cor.Cinza;
console.log(minhaCor);
console.log(Cor.Verde, Cor.Amarelo);
let carro = "BMW";
console.log(carro);
carro = { nome: 'BMW', ano: 1980 };
console.log(carro);
//  Tipos em funções
function retornaNome() {
    return nome;
}
console.log(retornaNome());
function digaOi() {
    console.log("Oi...");
}
console.log(digaOi());
function multiplicar(numA, numB) {
    return numA * numB;
}
function somar(a, b) {
    return a + b;
}
console.log(multiplicar(3, 32));
// tipo funcao
let calculo;
calculo = multiplicar;
// calculo = somar
console.log(calculo(3, 2));
console.log(typeof calculo);
/**
 * Tipo objeto -> posssibilita a criação de objeto com um determinado padrão a ser seguido no
 * momento de sua instância, explicitando os tipos de seus atributos
 */
let pessoa = { nome: 'Pedro', idade: 25 };
// pessoa = {nome: 'Pedro', idade: 23}
console.log(pessoa);
/** Desafio
 *
 * Criar um objeto funcionario com:
 *  - Array de strings com os nomes dos supervisores
 *  - Função de bater ponto que recebe a hora (número)
 *   e retirna uma string
 *  -> Ponto normal (<= 8)
 *  -> Fora do horário (> 8)
 */
let funcionarios;
let sup = ["Maria", "João", "Matheus"];
let baterPonto = function (horas) {
    if (horas <= 8)
        return 'Ponto normal';
    else
        return 'Fora do horário';
};
funcionarios = {
    supervisores: ["Marcos", "José", "Inacio"],
    baterPonto: baterPonto
};
console.log(funcionarios);
console.log(funcionarios.supervisores);
console.log(funcionarios.baterPonto(50));
function criarPessoa(nome, idade) {
    return {
        nome: nome,
        idade: idade
    };
}
let paulo = criarPessoa("Paulo Costa", 23);
console.log(paulo);
let fiat = { modelo: 'Uno', ano: 1987 };
console.log(fiat);
// Union types -> Cria a possibilidade de se atribuir tipos específicos limitados às variáveis
let notas;
notas = "10";
console.log(typeof notas);
notas = 23;
console.log(typeof notas);
// Checando tipos
if (typeof notas == "number")
    console.log("É number");
else
    console.log("Não é um number");
function infinity() {
    throw new Error("Falha na matrix");
}
// console.log(infinity())
function subtrai(a = 0, b = 0) {
    return a - b;
}
console.log(subtrai(2, 1));
console.log(subtrai(4));
//Valores opcionais com o null
let altura = 12;
altura = null;
let alturaOpcional = 12;
console.log(alturaOpcional);
let podeSerNulo = { nome: "Pedro", idade: 23, clt: false };
console.log(podeSerNulo.toString());
console.log(podeSerNulo.hasOwnProperty('nome'));
console.log(JSON.stringify(podeSerNulo));
let array = [];
array.push(podeSerNulo, "KKK", paulo);
console.log(array);
let contaBradesco = {
    saldo: 120,
    depositar(valor) {
        this.saldo += valor;
    }
};
let ana = {
    nome: 'Ana Maria Broga',
    contatos: ["Caio", "Pedro", "Joana"],
    contaBancaria: contaBradesco
};
ana.contaBancaria.depositar(700);
ana.contaBancaria.depositar(600);
console.log(ana);
console.log(ana.contaBancaria.saldo.toLocaleString('currency', { style: 'currency', currency: 'BRL' }));
