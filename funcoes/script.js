//função com parametro
/*
function mensagem(primeiro, segundo) {
    console.log(primeiro, segundo);
}

mensagem("primeiro parametro,", "segundo parametro");
*/

//---------------------------------------------------------

//função declarativa
function funcao() {
    console.log("Função teste");
}

funcao();
//---------------------------------------------------------



//expressões de funções
var funcao02 = function funcao02() {
    console.log("Função de expressão");
}

funcao02();

//expressões de funções sem nomeação
var funcao03 = function() {
    console.log("Função de expressão sem nomeação");
}

funcao03();


//---------------------------------------------------------
//arrow function
var funcao04 = () => {
    console.log("Arrow Função");
}

funcao04();