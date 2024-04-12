// Declaring 3 variables used in operation
let firstNum, operator, secondNum;

function doIt() {
    switch(operator) {
        case "+":
            addNum();
            break;
        case "-":
            subtractNum();
            break;
        case "/":
            divideNum();
            break;
        case "*":
            multiplyNum();
            break;
    }
}

function addNum() {
    return firstNum + secondNum;
}

function subtractNum() {
    return firstNum - secondNum;
}

function divideNum() {
    return firstNum / secondNum;
}

function multiplyNum() {
    return firstNum * secondNum;
}

