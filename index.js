function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}
/*
function operate(operator, a, b){
    if (operator === "+"){
        return add(a, b)
    } else if (operator === "-"){
        return subtract(a, b)
    } else if (operator === "*"){
        return multiply(a, b)
    } else if (operator === "/"){
        return divide(a, b)
    }
}
*/
const operate = (operator, a, b) => {
  switch (operator){
    case "+":
        return add(a, b) 
    case  "-":
        return subtract(a, b)
    case "*":
        return multiply(a, b)
    case "/": 
        return divide(a, b)
    }
}

const display = document.querySelector("#display");
const numberPad = document.querySelectorAll(".number")
const functions = document.querySelectorAll(".function");
const equal = document.querySelector(".equal")
const clear = document.querySelector(".clear")

let i = 0;
let f = 0;
let displayValue = [];
let operatorPressed = [];
let combinedNumbers = [];

numberPad.forEach(number => {
    number.addEventListener("click", () => {
        console.log("clicked")
        displayValue[i] = number.id;
        display.textContent += number.id;
        i++;
    });
})

functions.forEach(operator => {
    operator.addEventListener("click", () => {  
      console.log("clicked")
      combinedNumbers[f] = parseInt(displayValue.join(""));
      displayValue = []
      operatorPressed[f] = operator.id;
      display.textContent += operator.id; 
      f++;
    });
})

equal.addEventListener("click", () => {
    combinedNumbers[combinedNumbers.length] = parseInt(displayValue.join(""));
  finalNumber = operate(operatorPressed[0], combinedNumbers[0], combinedNumbers[1]);
  display.textContent = finalNumber; 
  displayValue = [];
  combinedNumbers = [];
  operatorPressed = [];
  i = 0;
  f = 0;
})

clear.addEventListener("click", () => {
  display.textContent = "";
  displayValue = [];
  operatorPressed = [];
  combinedNumbers = [];
  i = 0;
  f = 0;
})