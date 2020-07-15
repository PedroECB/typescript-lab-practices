// let & const

let valor = true

// function soma(){
//     var valor = 10
// }

// if(valor){
//     var variavel = 10
// }

// console.log(variavel)

const cpf:string = '023.321.654-21'
// cpf = '234.234.155.78'
console.log(cpf)

// let soma = (a, b) => a + b
// console.log(soma(23,2))

var frase = 'Hello World - Externo!'

function escreveFrase(){
    var frase = 'Hello World - Interno!'
    console.log(frase)
}
escreveFrase()
console.log(frase)

for(var i=0; i < 5; i++){
    console.log(i)
}
console.log("Escrevendo o i externamente ao for")
console.log(i)

// for(let j=0;j<5;j++){
//     console.log(j)
// }
// console.log("Escrevendo o j externamente ao for")
// console.log(j)


// Arrow function - 


function somatorio (n1:number, n2:number):number {
    return n1 + n2
}

const subtrair = (a:number, b:number):number => a - b

console.log(somatorio(5,3))
console.log(subtrair(10,3))


const saudacao = () => console.log("Olá!")
saudacao()

const falarCom = (pessoa:string) => console.log("Olá "+pessoa)
falarCom('Pedro')

function normalComTHis(){
    console.log(this)
}
normalComTHis()

const normalComThisEspecial = normalComTHis.bind({nome: 'Pedro', idade: 23})
console.log(normalComThisEspecial())

console.log('------------- this global ----------------')
console.log(this)

console.log('---- this na arrow ------')
const arrrowComThis = () => console.log(this)
arrrowComThis()

// Parâmetros padrão

function contagemRegressiva(tempo:number = 1){
    let i = 0
    console.log('--- Inicializando a nossa contagem regressiva ---')

    let interval = setInterval(()=>{
        console.log(i)
        i += tempo
        
        if(i > 10){
            clearInterval(interval)
        }
    }, tempo*10)

    // if(tempo >= 10){
    //     clearInterval(interval)
    // }
}

// contagemRegressiva(1)

// Spread/Rest
let valores = [1, 2, 3, 4, 5]
let valores2 = [10, 12, 32]
let valores3 = ["Fruta 1", "Fruta2", ...valores, ...valores2]


console.log(valores3)

const turmaA:string[] = ["Miguel", "Luiz", "Matheus"]
const turmaB:string[] = ["Joana", "Maria", "Fernanda"]
const turmaC:string[] = [...turmaA, ...turmaB]

let carlos:string|number = 'Carlos'

function retornaArray(...args:number[]):number[]{
    return args
}


const arrayRetornado = retornaArray(1, 4, 5, 2, 8)
console.log(arrayRetornado.map((e)=> e.toLocaleString('currency', {
    style:'currency', 
    currency: 'BRL',
    currencyDisplay:'symbol'
})))

const num:number = 123
console.log(new Intl.NumberFormat('pt-BR', {
    style:'currency', 
    currency:'BRL', 
    currencyDisplay:'symbol'
}).format(num))

// Operador Rest/Spread com tuplas

const tupla: [number, string, boolean] = [1, 'Pedro', false]

function tuplaParam(a:number, b:string, c:boolean):void{
    console.log(`1)a:${a}, b:${b}, c: ${c}`)
}

tuplaParam(...tupla)

function sumArgs(...args:number[]):number{
    let soma = 0
    console.log(Array.isArray(args))
    for(let i=0; i < args.length; i++){
        soma += args[i]
    }
    return soma
}
console.log(sumArgs(4, 1, 1))
