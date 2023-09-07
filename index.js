const currentNumber = document.querySelector(".currentNumber");
const previousNumber = document.querySelector(".previousNumber p");
const mathSign = document.querySelector(".mathSign");
const numberButtons = document.querySelectorAll(".number");
const operatorsButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear"); 

let result = "";
document.querySelector(".currentNumber").innerHTML = "";
document.querySelector(".previousNumber p").innerHTML = "";
document.querySelector(".mathSign").innerHTML = "";

function displayNumbers(){
    if(this.textContent === "." && currentNumber.innerHTML.includes(".")) return;
    if(this.textContent === "." && currentNumber.innerHTML === "") return currentNumber.innerHTML = "."

    currentNumber.innerHTML += this.textContent;
}
function showResult(){
    if(previousNumber.innerHTML==="" && currentNumber.innerHTML===""){
        return;
    }
    let a = Number(currentNumber.innerHTML);
    let b = Number(previousNumber.innerHTML);
    let operator = mathSign.innerHTML;
    switch(operator){
        case '+':
            result = a + b;
            break;
        case '-':
            result = b - a;
            break;
        case ":":
            result = b/a;
            if(a==0){
                result = "ERROR!"
            }
            break;
        case 'x':
            result = a*b;
            break;
        case '%':
            result = (a*b)/100;
            break;
        case '+/-':
            result = -b;
            break;
    }
    document.querySelector(".currentNumber").innerHTML = result;
    
}
function clearScreen(){
    result = 0;
    document.querySelector(".currentNumber").innerHTML = "";
}
function fullclear(){
    result = 0;
    document.querySelector(".currentNumber").innerHTML = "";
    document.querySelector(".previousNumber p").innerHTML = "";
    document.querySelector(".mathSign").innerHTML = "";
}
function operate(){
    if(currentNumber.innerHTML === "")return;
    previousNumber.innerHTML = currentNumber.innerHTML;
    document.querySelector(".mathSign").innerHTML = this.textContent;
    currentNumber.innerHTML = "";
    
}

equalButton.addEventListener('click', showResult);
clearButton.addEventListener('click', clearScreen);
clearButton.addEventListener('dblclick', fullclear);


 operatorsButtons.forEach((button) => {
     button.addEventListener('click', operate);
 });


numberButtons.forEach(function(button) {
    button.addEventListener('click', displayNumbers);
});