
namespace Areas{
    export const PI = 3.14

    export function circunferencia(raio:number):number{
        return PI * Math.pow(raio, 2)
    }
   
   
    export function retangulo(base:number, altura:number):number{
        return base * altura
    }   
}


console.log(Areas.circunferencia(10))
console.log(Areas.retangulo(2, 4))

const PI = 4
console.log(PI)
console.log(Areas.PI)


// Namespaces aninhados

namespace Letras{
    export  namespace Vogais{
        export const letras:string[] = ['a', 'e', 'i', 'o', 'u']
    }
}

console.log(Letras.Vogais.letras)


const objects = [
    {nome: 'Pedro', idade: 23},
    {nome: 'Carlos', idade: 14},
    {nome: 'João', idade: 14},
    {nome: 'Silva', idade: 13},
]

console.log(objects.find((pessoa)=> pessoa.idade == 14))