let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}

//for
/*
for(let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}
*/


//for in - mostra indice
/*
for(let i in array) {
    console.log(i);
}
*/

//for in - com object - transforma em array
/*
for(i in object) {
    console.log(i);
}
*/


//for of - imprime o valor de casa indice
/*
for(let i of array) {
    console.log(i);
}
*/


// for of - com object - seleciona a propriedade
for(i of object.propriedade1){
    console.log(i);
}



//while
var a = 0;
/*
while(a < 10) {
    a++;
    console.log(a);
}
*/

do {
    a++;
    console.log(a);
}while(a < 10);
