//Aqui vão estar todos os exs da aula
//pp16
let myLuckyNumber = 16;
let myName = "Sara";

//alert("o meu nome é "+myName + " e o meu número preferido é o " + myLuckyNumber);

//pp 27

//constante inicial
const MESSAGE = " TASTE THE RAINBOW ";

//nova variável que contém a inicial manipulada conforme o solicitado
let whisper = MESSAGE.toLowerCase().trim();

//impressão na consola do resultado da nova variável
console.log(whisper);

//exercício pp29
const WORD = "skateboard";

let facialHair = WORD.slice(5, 10).replace("o", "e");
console.log("a palavra final é " + facialHair + " e o exercício está pronto");

//sintaxe alternativa
// console.log(`a palavra final é ${facialHair}  e o exercício está pronto`);

//pp 35
// let fName = prompt('qual é o seu nome?');
// let surname = prompt('qual é o seu apelido?');
// alert('olá '+ fName+' '+surname)

//ex 39
// let myDay = prompt('que dia da semana é hoje?').toLowerCase().trim();

// if(myDay == 'sexta'){
//     alert('Yay é sextaa');
// }else if(myDay == 'sábado' || myDay == 'domingo'){
//     alert('Yay é fim de semana');
// }else{
//     alert('força nisso');
// }

let password = prompt('indique uma pass com pelo menos 6caracteres');

if(password.length <6){
    alert('atenção que não tens 6 caracteres');
}else{
    alert('password ok');
}
