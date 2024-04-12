// Function when equal sign is pressed
function doIt() {
    // Checking for valid sentence
    if (firstNum == undefined || secondNum == undefined) {
        clearDisplay(undefined);
        return;
    }

    
    let result; 
    switch(operator) {
        case "+":
            result = parseInt(firstNum) + parseInt(secondNum);
            break;
        case "-":
            result = parseInt(firstNum) - parseInt(secondNum);
            break;
        case "÷":
            if (parseInt(secondNum) == 0) {
                alert("Infinite!");
                clearDisplay(undefined);
                return;
            }
            result = parseInt(firstNum) / parseInt(secondNum);
            break;
        case "*":
            result = parseInt(firstNum) * parseInt(secondNum);
            break;
        case undefined:
            break;
    }
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
    if (firstNum == undefined && secondNum == undefined) {
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
});

// Adding event listeners to .operators to update var, call doIt if var alr exists
const ops = document.querySelectorAll(".operators");
ops.forEach((op) => {
    op.addEventListener("click", () => {
        console.log(op.value);
        if (operator == undefined) {
            operator = op.value;
            displayCurrent();
        }
        else if (operator && firstNum && secondNum == undefined) {
            operator = op.value;
            displayCurrent();
        }
        else {
            doIt();
            operator = op.value;
            displayCurrent();
        }
    });
});