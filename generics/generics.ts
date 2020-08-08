function echo(object:any){
    return object
}

console.log(echo('João').length)
console.log(echo(42).length)
console.log(echo({name: 'Pedro', age: 89}).length)


// Using generics

function echoGeneric<T>(object:T): T {
    return object
}

console.log(echoGeneric('João').length)
console.log(echoGeneric<number>(42))
console.log(echoGeneric<Object>({name: 'Pedro', age: 89}))

const students:Array<string> = ['Pedro', 'João', 'Maria']
const avaliacoes:Array<number> = [5, 7, 8.9, 9.5]
avaliacoes.push(3.6)
// avaliacoes.push('5.5')

console.log(avaliacoes)

function imprimir<T>(args: T[]):void{
    args.forEach(element => console.log(element))
}

imprimir<number>(avaliacoes)
imprimir<string>(students)

// Tipos mais complexos como generics

imprimir<{nome: string, idade:number}>([
    {nome: 'Pedro', idade: 23},
    {nome: 'Carlos', idade: 56}
])

type Aluno = {nome:string, idade:number}

// const josenildo:Aluno = {nome: 'Josenildo Vieira', idade: 27}
imprimir<Aluno>([
    {nome: 'Pedro', idade: 23},
    {nome: 'Carlos', idade: 56}
])

const arrayDeAlunos:Array<Aluno> = []

// function types with generics
type Echo = <T>(data:T) => T
const chamarEcho: <T> (data: T) => T = echoGeneric
console.log(chamarEcho<string>('Minha frase, blz?'))

// Classes com generics

class OperacaoBinaria{ 
    constructor(public operando1:number, public operando2:number){}

    executar(){
        return this.operando1 + this.operando2
    }
}

console.log(new OperacaoBinaria(5,7).executar())

abstract class OperacaoBinariaGeneric<T, R>{
    constructor(public operando1:T, public operando2:T){}

    abstract executar(): R
}