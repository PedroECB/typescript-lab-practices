


function logarClasse(constructor:Function){
    console.log(constructor)
}

// Decorator Factory
function decoratorVazio(_:Function){}

function logarClasseSe(valor:boolean){
    return valor ? logarClasse : decoratorVazio
}

function decorator(a:string, b:number){
    return function(constructor:Function):void{
        console.log(a+' '+b)
    }
}


function decorator2(obj: {a:string, b:number}){
    return function(_:Function):void{
        console.log(obj.a +' --- '+ obj.b)
    }
}

// @logarClasse
// @logarClasseSe(false)
// @decorator('Pedro', 123)
@decorator2({a: 'Pedro', b:23})
class Eletrodomestico{
    constructor(){
        console.log('novo...')
    }
}