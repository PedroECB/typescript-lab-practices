// import {Data}  from '../classes/class'
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
class SomaBinaria extends OperacaoBinariaGeneric {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(5, 2).executar());
class DiferencaEntreDatas extends OperacaoBinariaGeneric {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diff = Math.abs(t1 - t2);
        const dias = 1000 * 60 * 60 * 24;
        return `${Math.ceil((diff / dias))} dias de diferença`;
    }
}
// const data1 = new Data(1, 6, 2020)
// const data2 = new Data(9, 6, 2020)
// console.log(new DiferencaEntreDatas(data1, data2).executar())
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(elemento) {
        this.fila.push(elemento);
    }
    proximo() {
        if (this.fila.length > 0) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        else {
            return null;
        }
    }
    imprimir() {
        console.log('---- Fila ----');
        console.log(this.fila);
    }
}
let filaAlunos = new Fila('Luiz', 'André', 'Lucas', 'Josias');
filaAlunos.imprimir();
filaAlunos.proximo();
filaAlunos.imprimir();
// Restrições
