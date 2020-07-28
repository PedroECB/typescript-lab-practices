var Areas;
(function (Areas) {
    Areas.PI = 3.14;
    function circunferencia(raio) {
        return Areas.PI * Math.pow(raio, 2);
    }
    Areas.circunferencia = circunferencia;
    function retangulo(base, altura) {
        return base * altura;
    }
    Areas.retangulo = retangulo;
})(Areas || (Areas = {}));
console.log(Areas.circunferencia(10));
console.log(Areas.retangulo(2, 4));
const PI = 4;
console.log(PI);
console.log(Areas.PI);
// Namespaces aninhados
var Letras;
(function (Letras) {
    let Vogais;
    (function (Vogais) {
        Vogais.letras = ['a', 'e', 'i', 'o', 'u'];
    })(Vogais = Letras.Vogais || (Letras.Vogais = {}));
})(Letras || (Letras = {}));
console.log(Letras.Vogais.letras);
const objects = [
    { nome: 'Pedro', idade: 23 },
    { nome: 'Carlos', idade: 14 },
    { nome: 'João', idade: 14 },
    { nome: 'Silva', idade: 13 },
];
console.log(objects.find((pessoa) => pessoa.idade == 14));
