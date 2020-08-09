// import {Data}  from '../classes/class'

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

class SomaBinaria extends OperacaoBinariaGeneric<number, number>{
    executar ():number{
        return this.operando1 + this.operando2
    }
}

console.log(new SomaBinaria(5, 2).executar())


class DiferencaEntreDatas extends OperacaoBinariaGeneric<Data, string>{
    
    getTime(data:Data):number{
        let {dia, mes, ano} = data
        return  new Date(`${mes}/${dia}/${ano}`).getTime()
        
    }

    executar():string{
        const t1 = this.getTime(this.operando1)
        const t2 = this.getTime(this.operando2)
        const diff = Math.abs(t1 - t2)
        const dias = 1000 * 60 * 60 * 24
        return `${Math.ceil((diff/dias))} dias de diferença`
    }
}



// const data1 = new Data(1, 6, 2020)
// const data2 = new Data(9, 6, 2020)

// console.log(new DiferencaEntreDatas(data1, data2).executar())


class Fila<T>{
    private fila:Array<T>
    
    constructor(...args:T[]){
        this.fila = args
    }

    entrar(elemento:T){
        this.fila.push(elemento)
    }
    
    proximo():T | null{
        if(this.fila.length > 0){
            const primeiro = this.fila[0]
            this.fila.splice(0, 1)
            
            return primeiro
        }else{
            return null
        }

    }

    imprimir(){
        console.log('---- Fila ----')
        console.log(this.fila)
    }

}


let filaAlunos = new Fila<string>('Luiz', 'André', 'Lucas', 'Josias')
filaAlunos.imprimir()
filaAlunos.proximo()
filaAlunos.imprimir()


// Restrições