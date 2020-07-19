class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    formatDate() {
        return `${this.dia <= 9 ? '0' + this.dia : this.dia}/${this.mes <= 9 ? '0' + this.mes : this.mes}/${this.ano}`;
    }
    formatInFull() {
        let months = [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
        ];
        return `${this.dia} de ${months[this.mes - 1]} de ${this.ano}`;
    }
}
const aniversario = new Data(9, 6, 1997);
console.log(aniversario);
console.log(aniversario.formatDate());
// Instância de objeto utilizando parâmetros padrões
const casamento = new Data;
console.log(casamento.formatInFull());
class DataExpert {
    constructor(dia = 1, mes = 1, ano = 1975) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    formatDate() {
        return `${this.dia <= 9 ? '0' + this.dia : this.dia}/${this.mes <= 9 ? '0' + this.mes : this.mes}/${this.ano}`;
    }
    formatInFull() {
        let months = [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
        ];
        return `${this.dia} de ${months[this.mes - 1]} de ${this.ano}`;
    }
}
const aniversario2 = new DataExpert;
console.log(aniversario2.formatInFull());
console.log(aniversario2.dia);
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `Produto: ${this.nome} - Preço: ${this.preco} - Possui desconto: ${this.desconto !=
            0 ? `${this.desconto * 100}% off` : 'Não'}`;
    }
    precoComDesconto() {
        if (this.desconto > 0)
            return `Preço do(a) ${this.nome} com desconto: ${(this.preco - (this.preco * this.desconto))
                .toLocaleString('currency', { style: 'currency', currency: 'BRL' })}`;
        else
            return `${this.nome} não possui desconto`;
    }
}
let caneta = new Produto('Caneta Bic', 3.85);
let caderno = new Produto('Caderno de 10 matérias', 25.0, 0.1);
console.log(caneta);
console.log(caderno);
console.log(caneta.resumo());
console.log(caderno.resumo());
console.log(caneta.precoComDesconto());
console.log(caderno.precoComDesconto());
