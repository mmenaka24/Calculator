const userInput = require('./userInput');

const setOperationAndCheckValidity = (operator) => {
    if (operator == "+" || operator == "plus" || operator == "add" || operator == "addition" || operator == "sum") {
        return "add";
    } else if (operator == "-" || operator == "minus" || operator == "subtract" || operator == "subtraction" || operator == "difference") {
        return "subtract";
    } else if (operator == "*" || operator == "x" || operator == "." || operator == "multiply" || operator == "multiplication" || operator == "product" || operator == "times") {
        return "multiply";
    } else if (operator == "/" || operator == "divide" || operator == "division" || operator == "quotient") {
        return "divide";
    } else {
        console.log(`Sorry, that is not a valid operator.
        
        This calculator can perform the following operations:
        Addition: please enter +, plus, add, addition or sum
        Subtraction: please enter -, minus, subtract, subtraction or difference
        Multiplication: please enter *, x, ., multiply, multiplication or product
        Division: please enter /, divide, division or quotient
        
        Please run the program again with one of these operations :)`);
        process.exit(0);
    }
}

const createArrayOfNumbers = (iterations) => {
    let arr = Array(iterations);
    for (let i=0; i<iterations; i++) {
        let again = false;
        do {
            const maybeNumber = userInput.getNumberInputWithPrompt(`Please enter number ${i+1}:`);
            if (isNaN(maybeNumber)) {
                console.log('This is not a number, please try again');
                again = true;
            } else {
                arr[i] = maybeNumber;
                again = false;
            }
        } while (again);
    }
    return arr;
}

exports.performOneArithmeticCalculation = function() {
    //first get operator and check that it is valid
    const operator = userInput.getStringInputWithPrompt('Please enter the operator:');
    let operation = setOperationAndCheckValidity(operator);

    //ask how many numbers
    const iterations = userInput.getNumberInputWithPrompt(`How many numbers do you want to ${operation}?`);

    //now get the numbers
    const arr = createArrayOfNumbers(iterations);

    //line of code to clarify numbers and operation
    console.log(`Your numbers are ${arr} and you want to ${operation} them...`);

    /* now perform the relevant operation
    first we let answer be just the first number, then perform the operations */
    let answer = arr[0];
    /* here we let i=1 rather than 0 to call the 2nd, 3rd, etc... element of arr
    the condition is still i < iterations
    as if there are 2 numbers then one operation is applied, 3 numbers 2 operations, etc... */
    for (const i of arr) {
        switch (operation) {
            case "add":
                answer += i;
                break;
            case "subtract":
                answer -= i;
                break;
            case "multiply":
                answer *= i;
                break;
            case "divide":
                answer /= i;
                break;
            default:
                console.log('Sorry, something seems to have gone wrong. Try again?');
        }
    }

    //finally, print the answer
    console.log(`
    The answer is ${answer}`);
}