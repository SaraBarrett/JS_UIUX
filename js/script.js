let myClass = "Turma UI/UX";
let myLoginName = null;

const MYBIRTHDAY = 1986;

let myNumber = 6;

// myNumber /= 2;
// myNumber += 10;
// alert(myNumber);
// //alert("Olá Turma de Ui UX");
// alert("Olá " + myLoginName);
// //sem login
// //alert("Olá");
// myLoginName = "Sara";
// //c/ login
// alert("Olá " + myLoginName);
// alert(myClass + " estão a ir muito bem!");
// alert("As notas da " + myClass + " são");

// myLoginName = "Nuno";
// alert("Olá " + myLoginName);

//exemplo actualizar variáveis: carrinho de compras
// let myCart = 0;
// alert("neste momento tens a pagar: " + myCart);

// //comprei chocolate que custa 2euros
// myCart = myCart + 2;
// alert("depois de comprar chocolates: " + myCart);

// //comprei arroz que custa 0.7
// myCart = myCart + 0.7;
// alert("depois de comprar arroz para fazer o jantar: " + myCart);

// //arrependi-me do chocolate e tirei do carrinho
// myCart = myCart - 2;
// alert("depois de retirar o chocolate tenho: " + myCart);

// //adicionei um gerador que custa 500
// myCart = myCart + 500;
// alert("depois de ter energia em casa pago: " + myCart);

// //foi-me aplicado devido à crise de energia um desconto de 5%
// myCart = myCart - myCart * 0.05;
// alert("total com desconto: " + myCart);

let moduleName = "Tecnicas Avançadas de Programação";
//alert("A primeira letra do módulo é " + moduleName[0]);
//alert(moduleName[9]);

console.log(moduleName);
console.log(moduleName[10]);
console.log("o tamanho da variável é " + moduleName.length);

let myFirstName = "Sara";
let mySecondName = "Monteiro";
let fullName = myFirstName + " " + mySecondName;

let myEmail = "saraMarmonteiro";

console.log(myEmail.indexOf("M"));

//let myFavoriteModule = prompt('Qual é o teu módulo preferido?');
// const LEGAL_AGE = 18;
// let userAge = prompt("qual é a tua idade?");

// if (userAge < LEGAL_AGE) {
//   alert("Ainda não tens idade para votar!");
// } else if (userAge == LEGAL_AGE) {
//   alert("vais-te estrear, yay");
// } else {
//   alert("vota em consciência");
// }
let alunos = ['Isabele', 'Luís', 'Hugo', 'Bárbara'];
alunos.pop();

//alunos.push('Tiago');
//alunos.push('Milena');
console.log(alunos)

function myShoppingList(){
    let shoppingList = [
    ["batatas p/cozer", "batatas p/fritar"],
    "Feijão"
    ];
    
    shoppingList.push("chocolates")
    let item = prompt("que item quer adicionar na lista?")
    shoppingList.push(item)
    console.log(shoppingList)
}



//Arrays: outros métodos
// let mix = alunos.concat(shoppingList)
// console.log(mix)
//o primeiro[], [0] correponde ao array de batatas
//o segundo [], [1] corresponde à posição dentro do array de batatas
//o terceiro[], [10] corresponde ao f porque ele entra dentro da string
// console.log(shoppingList[0][1][10]);

//OBJECTOS

// let userData = {
//     fName: 'Sara',
//     job: 'programadora',
//     age: 39,
//     hobbies:['ler', 'musica']
// }
// //assignar um novo valor à key job
// userData.job = 'formadora'

// //aceder ao array de hobbies à música
// console.log(userData.hobbies[1])

//let movies = ["pulp fiction", "casablanca", "tempos modernos", "laranja mecanica", "titanic", "outroFilme"];

//console.log("o filme é "+ movies[0])
//console.log("o filme é "+ movies[1])
//console.log("o filme é "+ movies[2])
// console.log("o filme é "+ movies[3])

// for(let element of movies){
//     console.log("o filme é "+ element)
// }

// let quizz = ["ao nome", "à morada", "ao nif", "à profissão"];


// for(let question of quizz){
//     prompt("responde "+ question);
// }


function myPass(){
    let userPass = prompt('Insira uma pass com o mínimo de 6 caracteres');


    while(userPass.length < 6) {
        userPass = prompt('Password Inválida. Insira uma pass com o mínimo de 6 caracteres');
    }

    alert('pass ok!');
}