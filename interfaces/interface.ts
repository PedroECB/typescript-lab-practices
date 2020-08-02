
// Definir obrigatoriedade de determinada propriedade na chamada do método
function saudarComOla(person: {nome:string}){
    console.log('Olá, '+person.nome)
}

function mudarNome(person: {nome:string}){
    person.nome = 'Joana'
}

// O mesmo exemplo utilizando interface

interface Humano{
    nome:string
    idade?:number
    [prop: string]:any

    saudar(sobrenome:string): void
}

/** a criação de atributos com nome dinâmico se dá pela declaração do atributo entre colchetes
 * com o tipo do nome do atributo, seguido do tipo do atributo propriamente dito
 */

function saudarComOla2(person: Humano){
    console.log('Olá, '+person.nome)
}

function mudarNome2(person: Humano){
    person.nome = 'Joana'
}

const person:Humano = {
    nome: 'João',
    idade: 27,

    saudar(sobrenome:string){
        console.log(`Olá, ${this.nome} ${sobrenome}`)
    }

}

saudarComOla(person)
mudarNome(person)
saudarComOla(person)
person.saudar('Américo')

// saudarComOla2({nome: 'Carlos', idade: 23, altura: 1.86})



// Interface com  Classes

 class Cliente implements Humano{
    nome:string
    salario:number
    ultimaCompra = new Date().toISOString()

    saudar(sobrenome:string){
        console.log(`O cliente ${this.nome} ${sobrenome} está saudando...`)
    }
 }


 const clienteJose = new Cliente
 clienteJose.nome = "José"
 clienteJose.saudar('Venâncio')
 console.log(clienteJose.ultimaCompra)

//  Interface função

interface FuncaoCalculo{
    (a:number, b:number):number 
}

let potencia:FuncaoCalculo

potencia = function(base:number, exp:number):number{
    // return Math.pow(base, exp)
    // Array(exp).fill(base).reduce((t, a)=> t * a)
    return base**exp
}

console.log(potencia(2,8))

// Relações de Herança entre Classes e Interfaces
/**
 * 
 * Relações do tipo Classes/Interfaces são baseadas em implementações
 * Relações do tipo Intefaces/Interfaces e Classes/Classes são baseadas em heranças (extends)
 * 
*/

interface A{
    a():void
}

interface B{
    b():void
}

interface ABC extends A, B{
    c():void
}

class RealA implements A{
    a():void{}
}

class RealAB implements A, B{
    a():void{}
    b():void{}
}

class RealABC implements ABC{
  a():void{}
  b():void{}
  c():void{}
}

// Criando log alternativo para protótipos de objetos


interface Object{
    log():void
}
Object.prototype.log = function(){
    console.log(this.toString())
}

const x = 2
const y = 3
const z = 4

x.log()
y.log()
z.log()

// const joana = {nome: 'Joana', idade: 23, toString(){ return this.nome+'+-+'}}
// console.log(JSON.stringify(joana))
// console.log(joana.toString())