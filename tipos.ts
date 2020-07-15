//  string

let nome:string = "Pedro"

//  numbers

let idade = 23
idade = 23.2
console.log(`A minha idade é: ${idade}`)

//  boolean
let maiorIdade = false
console.log(typeof maiorIdade)
console.log(maiorIdade)

let minhaIdade:any
minhaIdade = 24
console.log(typeof minhaIdade)

minhaIdade = "Idade: 23"
console.log(typeof minhaIdade)
console.log(minhaIdade)

//  array

let frutas:any[] = ["Manga", "Uva", "Banana"]
console.log(typeof frutas)
console.log(frutas[2])

frutas = [23, 423, 65]
console.log(typeof frutas)
console.log(frutas)

frutas.forEach((value)=> console.log(`R$ ${value.toFixed(2).replace('.',',')}`))

// tuplas

let endereco: [string, number, string] = ["Av Joana Angelica", 32, "Bloco C"]
console.log(endereco)

//enums

enum Cor{
    Cinza, // 0
    Verde = 200, // 1
    Azul, // 2
    Amarelo,
    Marrom
}

let minhaCor:Cor = Cor.Cinza
console.log(minhaCor)

console.log(Cor.Verde, Cor.Amarelo)

let carro:any =  "BMW"
console.log(carro)

carro = {nome:'BMW', ano: 1980}
console.log(carro)

//  Tipos em funções

function retornaNome():string{
    return nome
}

console.log(retornaNome())

function digaOi():void{
    console.log("Oi...")
}

console.log(digaOi())

function multiplicar(numA:number, numB:number):number{
    return numA * numB
}

function somar(a:number, b:number):number{
    return a + b
}

console.log(multiplicar(3, 32))

// tipo funcao

let calculo: (a:number, b:number) => number

calculo = multiplicar
// calculo = somar

console.log(calculo(3,2))
console.log(typeof calculo)

/**
 * Tipo objeto -> posssibilita a criação de objeto com um determinado padrão a ser seguido no 
 * momento de sua instância, explicitando os tipos de seus atributos
 */

let pessoa: {nome:string, idade:number} = {nome: 'Pedro', idade: 25}

// pessoa = {nome: 'Pedro', idade: 23}
console.log(pessoa)

/** Desafio
 * 
 * Criar um objeto funcionario com:
 *  - Array de strings com os nomes dos supervisores
 *  - Função de bater ponto que recebe a hora (número)
 *   e retirna uma string 
 *  -> Ponto normal (<= 8)
 *  -> Fora do horário (> 8)
 */

let funcionarios: {
    supervisores: string[],
    baterPonto: (horas:number) => string
}

let sup = ["Maria", "João", "Matheus"]

let baterPonto = function(horas:number){
    if(horas <= 8)
        return 'Ponto normal'
    else
        return 'Fora do horário'
}

funcionarios = {
    supervisores: ["Marcos", "José", "Inacio"],
    baterPonto: baterPonto
}

console.log(funcionarios)
console.log(funcionarios.supervisores)
console.log(funcionarios.baterPonto(50))


function criarPessoa(nome:string, idade:number):any{
   return {
       nome: nome,
       idade: idade
   }
}

let paulo = criarPessoa("Paulo Costa", 23)
console.log(paulo)

// Definição de tipo personalizado

type Carro ={
    modelo: string,
    ano: number
}

let fiat:Carro = {modelo: 'Uno', ano: 1987}
console.log(fiat)


// Union types -> Cria a possibilidade de se atribuir tipos específicos limitados às variáveis

let notas:number | string

notas = "10"
console.log(typeof notas)
notas = 23
console.log(typeof notas)

// Checando tipos

if(typeof notas == "number")
    console.log("É number")
else
    console.log("Não é um number")


function infinity():never{
 throw new Error("Falha na matrix")
}


// console.log(infinity())

function subtrai(a:number = 0, b:number = 0):number{
    return a-b 
}

console.log(subtrai(2, 1))
console.log(subtrai(4)) 

//Valores opcionais com o null
let altura = 12
altura = null

let alturaOpcional: number | null = 12
console.log(alturaOpcional)


let podeSerNulo = {nome:"Pedro", idade: 23, clt: false}
console.log(podeSerNulo.toString())

console.log(podeSerNulo.hasOwnProperty('nome'))
console.log(JSON.stringify(podeSerNulo))


let array:any[] = []

array.push(podeSerNulo, "KKK", paulo)
console.log(array)


//  Desafio

// let contaBancaria = {
//     saldo: 2000,
//     depositar(valor){
//         this.saldo += valor
//     }
// }

// let correntista = {
//     nome: 'Ana Maria',
//     contaBancaria: contaBancaria,
//     contatos: ["João", "José", "Osnildo"]
// }

// correntista.contaBancaria.depositar(600)
// console.log(correntista)


type ContaBancaria = {
    saldo:number, 
    depositar:(valor:number)=> void
}

type Correntista = {nome:string, contatos:string[], contaBancaria:ContaBancaria}


let contaBradesco: ContaBancaria = {
    saldo: 120, 
    depositar(valor:number){
        this.saldo += valor
    }
}

let ana:Correntista = {
    nome: 'Ana Maria Broga', 
    contatos: ["Caio", "Pedro", "Joana"], 
    contaBancaria: contaBradesco
}

ana.contaBancaria.depositar(700)
ana.contaBancaria.depositar(600)

console.log(ana)
console.log(ana.contaBancaria.saldo.toLocaleString('currency', {style:'currency', currency: 'BRL'}))