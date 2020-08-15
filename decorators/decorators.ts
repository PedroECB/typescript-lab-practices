
type Constructor = {new (...args: any[]): {}}

function logarClasse(constructor:Constructor){
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


function logarObjeto(constructor: Constructor){
    return class extends constructor{
        constructor(...args:any[]){
            console.log('Antes...')
            super(...args)
            console.log('Depois...')
        }
    }
}

// Adicionando método com decorator

interface FogaoInterface{
    imprimir?():void
}

@imprimivel
class Fogao implements FogaoInterface{
    constructor(){
        console.log('Novo Fogão...')
    }
}

function imprimivel(constructor:Function){
    constructor.prototype.imprimir = function(){
        console.log(this)
    }
}
/**
 * O compilador do TS não consegue inferir que o método imprimir está contido dentro da classe Fogao
 * quando o método é atribuido à classe por meio do prototype. Uma das formas de evitar isso é criando
 * uma interface e declarando o método opcional dentro dessa interface.
 * 
*/
// Interface criada para evitar que o interpretador 

// new Fogao().imprimir()

// Uma das formas de bular a validação do compilador
// (<any>new Fogao()).imprimir()

// const fogao = new Fogao()
// fogao.imprimir && fogao.imprimir()


// Desafio perfil admin

const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
}

@perfilAdmin
class MudancaAdministrativa{
    critico(){
        console.log("Algo crítico foi alterado")
    }
}

function perfilAdmin <T extends Constructor>(constructor:T){
    return class extends constructor{
        constructor(...args:any[]){
            super(...args)
            if(!usuarioLogado || !usuarioLogado.admin){
                throw new Error('Sem permissão de administrador')
            }
        }
    }
}

new MudancaAdministrativa().critico()

// Decorator em métodos

class ContaCorrente{
    private saldo:number

    constructor(saldoInicial:number){
        this.saldo = saldoInicial
    }

    @congelar
    sacar(valor:number){
        if(valor <= this.saldo){
            this.saldo -= valor
            return true
        }else{
            return false
        }
    }

    @congelar
    getSaldo():string{
        return this.saldo.toLocaleString('currency', {style: 'currency', currency:'BRL'})
    }
}

console.log("Hello world")
const cc = new ContaCorrente(10312.50)
console.log(cc.getSaldo())
cc.sacar(3500)
console.log(cc.getSaldo())


// Modificando o saldo diretamente propositalmente

cc.getSaldo = function(){
    return this['saldo'] + 7000
}

console.log(cc.getSaldo())

function congelar(alvo:any, nomePropriedade:string, descritor:PropertyDescriptor){
    console.log(alvo)
    console.log(nomePropriedade)
    descritor.writable = false
}

// const carroDeMao = {modelo:'CDM', dataFabricacao: '09/06/1990'}
// Object.freeze(carroDeMao)
// console.log(carroDeMao)
// carroDeMao.modelo = 'KKK'
// console.log(carroDeMao)