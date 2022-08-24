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
let displayValue = [];

numberPad.forEach(number => {
    number.addEventListener("click", () => {
        console.log("clicked")
        displayValue[i] = number.id;
        display.textContent += number.id; 
    });
})

functions.forEach(operator => {
    operator.addEventListener("click", () => {
      i++;  
      console.log("clicked")
      displayValue[i] = operator.id;
      display.textContent += operator.id; 
      i++;
    });
})

equal.addEventListener("click", () => {
//    display.textContent = operate("+", 5, 5);
  display.textContent = ""; 
  
  displayValue = [];
})

clear.addEventListener("click", () => {
  display.textContent = "";
  displayValue = [];
  
})