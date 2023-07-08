const readline = require('readline-sync');
//functions are defined at the bottom of the code

printWelcomeMessage();
performOneCalculation();

function printWelcomeMessage() {
    console.log('Welcome to the calculator!');
    console.log('==========================');
}

function performOneCalculation() {
    //first get operator and check that it is valid
    console.log('\nPlease enter the operator:');
    const operator = readline.prompt();
    let operation = setOperationAndCheckValidity(operator);

    //ask how many numbers
    const iterations = takeUserInputConvert('How many numbers do you want to ' + operation + '?');

    //now get the numbers
    const arr = createArrayOfNumbers(iterations);

    //line of code to clarify numbers and operation
    console.log('Your numbers are ' + arr + ' and you want to ' + operation + ' them...');

    /* now perform the relevant operation
    first we let answer be just the first number, then perform the operations */
    let answer = arr[0]
    /* here we let i=1 rather than 0 to call the 2nd, 3rd, etc... element of arr
    the condition is still i < iterations
    as if there are 2 numbers then one operation is applied, 3 numbers 2 operations, etc... */
    for (let i = 1; i < iterations; i++) {
        switch (operation) {
            case "add":
                answer = answer + arr[i];
                break;
            case "subtract":
                answer = answer - arr[i];
                break;
            case "multiply":
                answer = answer * arr[i];
                break;
            case "divide":
                answer = answer / arr[i];
                break;
            default:
                console.log('Sorry, something seems to have gone wrong. Try again?');
        }
    }

    //finally, print the answer
    console.log('\nThe answer is ' + answer);
}

function takeUserInputConvert(String) {
    console.log(String);
    const inputString = readline.prompt();
    const input = +inputString;
    return input
}

function setOperationAndCheckValidity(operator) {
    if (operator == "+" || operator == "plus" || operator == "add" || operator == "addition" || operator == "sum") {
        return "add";
    } else if (operator == "-" || operator == "minus" || operator == "subtract" || operator == "subtraction" || operator == "difference") {
        return "subtract";
    } else if (operator == "*" || operator == "x" || operator == "." || operator == "multiply" || operator == "multiplication" || operator == "product") {
        return "multiply";
    } else if (operator == "/" || operator == "divide" || operator == "division" || operator == "quotient") {
        return "divide";
    } else {
        console.log('Sorry, that is not a valid operator.');
        console.log('\nThis calculator can perform the following operations:');
        console.log('Addition: please enter +, plus, add, addition or sum');
        console.log('Subtraction: please enter -, minus, subtract, subtraction or difference');
        console.log('Multiplication: please enter *, x, ., multiply, multiplication or product');
        console.log('Division: please enter /, divide, division or quotient');
        console.log("\nPlease run the program again with one of these operations :)");
        process.exit(0);
    }
}

function createArrayOfNumbers(iterations) {
    let arr = Array(iterations)
    for (let i = 0; i < iterations; i++) {
        arr[i] = takeUserInputConvert('Please enter number ' + (i+1) + ':')
    }
    return arr
}