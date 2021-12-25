var jogador1 = 0;
var jogador2 = 0;
var placar;


// if ternário
jogador1 != -1 && jogador2 != -1 ? console.log("Os jogadores são validos") : console.log("Jogadores Inválidos");

if(jogador1 > 0) {
    console.log("Jogador1 fez gol");
} else if(jogador2 > 0) {
    console.log("Jogador2 fez gol");
} else {
    console.log("ninguem fez gol");
}