function calculadora() {
    const operacao = Number(prompt("Escolha uma operação:\n 1 - Soma(+)\n 2 - Subtração(-)\n 3 - Multiplicação(*)\n 4 - Divisão(/)\n 5 - Resto(%)\n 6 - Potenciação (**) "));
    //document.write(operacao);


    if(!operacao || operacao >= 7) {
        alert("Operação inválida");
        calculadora();
    } else {

        let n1 = Number(prompt("Insira o primeiro valor: "));
        let n2 = Number(prompt("Insira o segundo valor: "));
        let resultado;

        if(!n1 || !n2) {
            alert("Erro - parâmetros inválidos!");
            calculadora();
        } else {

            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }

            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }

            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} x ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divisao() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }

            function resto() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é ${resultado}`);
                novaOperacao();
            }

            function potencia() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2}ª é ${resultado}`);
                novaOperacao();
            }

            function novaOperacao() {
                let opcao = prompt("Deseja fazer uma nova operação?\n 1 - Sim\n 2 - Não");

                if(opcao == 1) {
                    calculadora();
                } else if(opcao == 2) {
                    alert("Programa finalizado");
                } else {
                    alert("Digite uma opção valida");
                    novaOperacao();
                }
            }

        }

        /*
        if(operacao == 1) {
            soma();
        }else if(operacao == 2) {
            subtracao()
        } else if(operacao == 3) {
            multiplicacao()
        } else if(operacao == 4) {
            divisao()
        } else if(operacao == 5) {
            resto()
        } else if(operacao == 6) {
                potencia()
        }
        */

        switch(operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisao();
                break;
            case 5:
                resto();
                break;
            case 6:
                potencia();
                break;
        }


       

    }

}

calculadora();