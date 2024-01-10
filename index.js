
function appendToDisplay(value) {
    const display1 = document.querySelector(".display1");
    
    if(display1.textContent === '0') {
        display1.textContent = value;
    }
    else {display1.textContent += value;
    }
}

let previousResults = [];
function calculate() {
    const display1 = document.querySelector(".display1");
    const display2 = document.querySelector(".display2");
    const expression = display1.textContent;
  
   
    const operators = ['+', '-', '*', '/'];
    let result = 0;
  
    operators.forEach((operator) => {
      const operands = expression.split(operator);
  
      if (operands.length > 1) {
   
        switch (operator) {
          case '+':
            result = operands.reduce((acc, operand) => acc + parseFloat(operand), 0);
            break;
          case '-':
            result = operands.reduce((acc, operand) => acc - parseFloat(operand), 0);
            break;
          case '*':
            result = operands.reduce((acc, operand) => acc * parseFloat(operand), 1);
            break;
          case '/':

            result = operands.reduce((acc, operand) => {
                const num = parseFloat(operand);
                return acc !== null && !isNaN(num) && num!== 0 ? acc / num : null;
             },1);
             
             if (result === null) {
                display1.textContent = 'Error';
                display2.textContent = 'Error';
                return;
              }
              break;
        }
      }
    });
    if (Number.isInteger(result)) {
        display1.textContent = result.toString();
        display2.textContent = result.toString();
    } else {
        result = parseFloat(result.toFixed(4));
        display1.textContent = result.toString().substring(0, 10);
        display2.textContent = result.toString().substring(0, 10);
    }
  }

function clearDisplay() {
    const display = document.querySelector(".display1");
    display.textContent = '0';

}
function deleteLastCharacter() {
    const display = document.querySelector(".display1");
    display.textContent = display.textContent.slice(0, -1);
}