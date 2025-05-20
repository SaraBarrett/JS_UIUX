//pp 65

function heart(){
    alert('<3');
}


function yourNumber(num){
    alert("O número preferido da pessoa é: "+num);
}


function tellMeYourNumber(){
    let myNumber = prompt('qual é o teu número?');
    yourNumber(myNumber)
}

//pp69
function rant(message){
    console.log('1:'+message.toUpperCase());
    console.log('2:'+message.toUpperCase());
    console.log('3:'+message.toUpperCase());
}

//pp72
function isSnakeEyes(num1, num2){
    if(num1 ==1 && num2==1){
        console.log('yay snake eyes')
    }else{
        console.log('não são snake eyeys')
    }

}