 let currentInput = document.getElementById("input")

let operandOne = 0
let operandTwo = 0
let operator = null

let Num1 = document.getElementById('Num1');
let Num2 = document.getElementById('Num2');
let Num3 = document.getElementById('Num3');
let Num4 = document.getElementById('Num4');
let Num5 = document.getElementById('Num5');
let Num6 = document.getElementById('Num6');
let Num7 = document.getElementById('Num7');
let Num8 = document.getElementById('Num8');
let Num9 = document.getElementById('Num9');
let clear = document.getElementById('clear');
let divide = document.getElementById('divide');
let equals = document.getElementById('equals');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let times = document.getElementById('times');
let decimal = document.getElementById('decimal');



function sum(op){
        
    if (op = "+") {
        operator = 1
        firstNUm = currentInput.textContent
    }
    currentInput.textContent = 0
}




function answer(operator) {
    secondNum = currentInput.textContent  
    if (operator = 1) {
        currentInput.textContent =  (parseInt(firstNUm) + parseInt(secondNum))  
    }
    else if (operator = "-") {
        return firstNUm - secondNum
    }
    else if (operator = "/") {
        return firstNUm / secondNum
    }

    else if (operator = "*") {
        return firstNUm * secondNum
    }
}   




function numButton(num) {
    if (currentInput.textContent == 0) 
        {currentInput.textContent = num}
    else if (currentInput.textContent != 0) 
        {currentInput.textContent += num}
    }    


Num1.addEventListener('click', () => { numButton(1)}, false);
Num2.addEventListener('click', () => { numButton(2)}, false);
Num3.addEventListener('click', () => { numButton(3)}, false);
Num4.addEventListener('click', () => { numButton(4)}, false);
Num5.addEventListener('click', () => { numButton(5)}, false);
Num6.addEventListener('click', () => { numButton(6)}, false);
Num7.addEventListener('click', () => { numButton(7)}, false);
Num8.addEventListener('click', () => { numButton(8)}, false);
Num9.addEventListener('click', () => { numButton(9)}, false);
Num0.addEventListener('click', () => { numButton(0)}, false);
plus.addEventListener('click', () => { sum('+')}, false);


equals.addEventListener('click', () => { answer(operator)}, false);




decimal.addEventListener('click', function point() {
    if (!currentInput.innerHTML.includes('.')) {
        currentInput.textContent += '.'}}, false);


clear.addEventListener('click', function() {currentInput.textContent = 0; 
            sumConstantOne = 0; sumConstantTwo = 0; }, false)
       
       
  




