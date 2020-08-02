// Definir obrigatoriedade de determinada propriedade na chamada do método
function saudarComOla(person) {
    console.log('Olá, ' + person.nome);
}
function mudarNome(person) {
    person.nome = 'Joana';
}
/** a criação de atributos com nome dinâmico se dá pela declaração do atributo entre colchetes
 * com o tipo do nome do atributo, seguido do tipo do atributo propriamente dito
 */
function saudarComOla2(person) {
    console.log('Olá, ' + person.nome);
}
function mudarNome2(person) {
    person.nome = 'Joana';
}
const person = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log(`Olá, ${this.nome} ${sobrenome}`);
    }
};
saudarComOla(person);
mudarNome(person);
saudarComOla(person);
person.saudar('Américo');
// saudarComOla2({nome: 'Carlos', idade: 23, altura: 1.86})
// Interface com  Classes
class Cliente {
    constructor() {
        this.ultimaCompra = new Date().toISOString();
    }
    saudar(sobrenome) {
        console.log(`O cliente ${this.nome} ${sobrenome} está saudando...`);
    }
}
const clienteJose = new Cliente;
clienteJose.nome = "José";
clienteJose.saudar('Venâncio');
console.log(clienteJose.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    // return Math.pow(base, exp)
    // Array(exp).fill(base).reduce((t, a)=> t * a)
    return Math.pow(base, exp);
};
console.log(potencia(2, 8));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
x.log();
y.log();
z.log();
// const joana = {nome: 'Joana', idade: 23, toString(){ return this.nome+'+-+'}}
// console.log(JSON.stringify(joana))
// console.log(joana.toString())
