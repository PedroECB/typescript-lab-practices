var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logarClasse(constructor) {
    console.log(constructor);
}
// Decorator Factory
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
function decorator(a, b) {
    return function (constructor) {
        console.log(a + ' ' + b);
    };
}
function decorator2(obj) {
    return function (_) {
        console.log(obj.a + ' --- ' + obj.b);
    };
}
// @logarClasse
// @logarClasseSe(false)
// @decorator('Pedro', 123)
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log('novo...');
    }
};
Eletrodomestico = __decorate([
    decorator2({ a: 'Pedro', b: 23 })
], Eletrodomestico);
function logarObjeto(constructor) {
    return class extends constructor {
        constructor(...args) {
            console.log('Antes...');
            super(...args);
            console.log('Depois...');
        }
    };
}
let Fogao = class Fogao {
    constructor() {
        console.log('Novo Fogão...');
    }
};
Fogao = __decorate([
    imprimivel
], Fogao);
function imprimivel(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
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
};
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log("Algo crítico foi alterado");
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
function perfilAdmin(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem permissão de administrador');
            }
        }
    };
}
new MudancaAdministrativa().critico();
// Decorator em métodos
class ContaCorrente {
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    }
    getSaldo() {
        return this.saldo.toLocaleString('currency', { style: 'currency', currency: 'BRL' });
    }
}
__decorate([
    congelar
], ContaCorrente.prototype, "sacar", null);
__decorate([
    congelar
], ContaCorrente.prototype, "getSaldo", null);
console.log("Hello world");
const cc = new ContaCorrente(10312.50);
console.log(cc.getSaldo());
cc.sacar(3500);
console.log(cc.getSaldo());
// Modificando o saldo diretamente propositalmente
cc.getSaldo = function () {
    return this['saldo'] + 7000;
};
console.log(cc.getSaldo());
function congelar(alvo, nomePropriedade, descritor) {
    console.log(alvo);
    console.log(nomePropriedade);
    descritor.writable = false;
}
// const carroDeMao = {modelo:'CDM', dataFabricacao: '09/06/1990'}
// Object.freeze(carroDeMao)
// console.log(carroDeMao)
// carroDeMao.modelo = 'KKK'
// console.log(carroDeMao)
