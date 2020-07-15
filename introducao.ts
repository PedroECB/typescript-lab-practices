class Pessoa{
    public nome:string = "Pedro"
    private idade:number = 23

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pedro = new Pessoa()
pedro.falar()

//Instanciando objetos para os testes
const joao = new Pessoa()
joao.nome = "João Batista"

console.log(pedro)
console.log(joao)