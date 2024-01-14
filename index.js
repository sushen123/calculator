const numbersButton = document.querySelectorAll(".numbers")
const operatorButton = document.querySelectorAll(".operator")
const dot = document.querySelector(".dot")
const equals = document.querySelector(".equals")
const display = document.querySelector(".display")
const clearButton = document.querySelector(".clear")
const dlt = document.querySelector(".delete")

let firstNumber = "";
let operator = "";
let secondNumber = "";

function add(a,b){
  return a+b;
}

function sub(a,b){
  return a-b;
}

function mul(a,b){
  return a*b;
}

function divide(a,b) {
  return a/b;
}

function operate(a, operator, b) {
  switch(operator) {
    case '+':
      return add(a,b)
    case '-': 
      return sub(a,b);
    case '*':
      return mul(a,b)
    case '/':
      return divide(a,b)     
  }
}


function updateDisplay(value) {
  display.textContent = value;

}


function clear() {
firstNumber = "";
operator = "";
secondNumber = "";
updateDisplay('');

 

}

function deleteLastCharacter() {
  display.textContent = display.textContent.slice(0, -1)
}


numbersButton.forEach((number) => {
  number.addEventListener("click", () => {
    if (!operator) {
    firstNumber += number.textContent;
    updateDisplay(firstNumber);

    }
    else {
        secondNumber += number.textContent;
        updateDisplay(secondNumber);
    }
  })
})

operatorButton.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", () => {
    if (firstNumber && !secondNumber) {
      // If the first number is set and the second number is not set, update the operator
      operator = operatorBtn.textContent;
     
    }
  });
});
clearButton.addEventListener("click", clear)

dlt.addEventListener("click", deleteLastCharacter)

equals.addEventListener("click", () => {
  if(firstNumber && operator && secondNumber){
    const result = operate(parseFloat(firstNumber), operator, parseFloat(secondNumber));
    updateDisplay(result);
    firstNumber = result.toString();
    operator = '';
    secondNumber = '';
  }
})

dot.addEventListener("click", () => {

const endsWithOperator = /[+\-*/]$/.test(display.textContent);
  if (!display.textContent.includes('.') && !endsWithOperator) {
    display.textContent += '.';
  }
})