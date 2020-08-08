function echo(object) {
    return object;
}
console.log(echo('João').length);
console.log(echo(42).length);
console.log(echo({ name: 'Pedro', age: 89 }).length);
// Using generics
function echoGeneric(object) {
    return object;
}
console.log(echoGeneric('João').length);
console.log(echoGeneric(42));
console.log(echoGeneric({ name: 'Pedro', age: 89 }));
const students = ['Pedro', 'João', 'Maria'];
const avaliacoes = [5, 7, 8.9, 9.5];
avaliacoes.push(3.6);
// avaliacoes.push('5.5')
console.log(avaliacoes);
function imprimir(args) {
    args.forEach(element => console.log(element));
}
imprimir(avaliacoes);
imprimir(students);
// Tipos mais complexos como generics
imprimir([
    { nome: 'Pedro', idade: 23 },
    { nome: 'Carlos', idade: 56 }
]);
// const josenildo:Aluno = {nome: 'Josenildo Vieira', idade: 27}
imprimir([
    { nome: 'Pedro', idade: 23 },
    { nome: 'Carlos', idade: 56 }
]);
const arrayDeAlunos = [];
const chamarEcho = echoGeneric;
console.log(chamarEcho('Minha frase, blz?'));
// Classes com generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new OperacaoBinaria(5, 7).executar());
class OperacaoBinariaGeneric {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
