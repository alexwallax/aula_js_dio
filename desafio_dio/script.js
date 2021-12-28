/*
* Criar uma função que receba 2 números como parâmetros
* Conferir se os números são iguais
* Conferir se a soma dos números é maior que 10 ou menor que 20
* Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20"
*/ 

var num1 = parseInt(prompt("Digite o primeiro valor"));
var num2 = parseInt(prompt("Digite o segundo valor"));

function desafio(n1, n2) {
    let resultado;
    let resultadoSoma;
    let soma;

    if(n1 === n2) {
        resultado = " são iguais. ";
    } else {
        resultado = " não são iguais. ";
    }

    soma = n1 + n2;

    if(soma >= 10 && soma <= 20) {
        resultadoSoma = " que é maior que 10 ou menor que 20.";
    } else {
        resultadoSoma = " que não é maior que 10 ou menor que 20.";
    }

    alert("Os números " + n1 + " e " + n2 + resultado + " Sua soma é " + soma + resultadoSoma);
}


desafio(num1, num2);