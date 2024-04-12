// Function when equal sign is pressed
function doIt() {
    let result; 
    switch(operator) {
        case "+":
            result = parseInt(firstNum) + parseInt(secondNum);
            break;
        case "-":
            result = parseInt(firstNum) - parseInt(secondNum);
            break;
        case "/":
            result = parseInt(firstNum) / parseInt(secondNum);
            break;
        case "*":
            result = parseInt(firstNum) * parseInt(secondNum);
            break;
        case undefined:
            break;
    }
    if ()
    clearDisplay(result);
}

// Resets display based on arg passed
function clearDisplay(toBeFirst) {
    firstNum = toBeFirst;
    secondNum = undefined;
    operator = undefined;
    displayCurrent();
}

// Function to update display, to be called after every input
function displayCurrent() {
    const display = document.querySelector("#display");
    if (firstNum == undefined && operator == undefined && secondNum == undefined) {
        display.textContent = "cleared";
    } 
    else if (firstNum && operator == undefined && secondNum == undefined) {
        display.textContent = firstNum;
    } 
    else if (firstNum && operator && secondNum == undefined) {
        display.textContent = firstNum + " " + operator;
    }
    else {
        display.textContent = firstNum + " " + operator + " " + secondNum;
    }
}

// Function to store number input in correct var and call displayCurrent
function updateNum(inputNum) {
    if (firstNum == undefined) {
        firstNum = inputNum;
        displayCurrent();
    }
    else if (operator == undefined) {
        firstNum += inputNum;
        displayCurrent();
    }
    else if (secondNum) {
        secondNum += inputNum;
        displayCurrent();
    }
    else {
        secondNum = inputNum;
        displayCurrent();
    }
}

// Declaring 3 variables used in operation, initialise display
let firstNum, operator, secondNum;
displayCurrent();

// Operator for temp use (testing updateNum)
operator = "+";

// Adding event listeners to "= and C"
const equal = document.querySelector("#equal");
equal.addEventListener("click", doIt);
const cButton = document.querySelector("#C");
cButton.addEventListener("click", () => {
    clearDisplay(undefined);
});

// Adding event listeners to .numbers
const numbers = document.querySelectorAll(".numbers");
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        console.log(number.value);
        updateNum(number.value);
    });
})