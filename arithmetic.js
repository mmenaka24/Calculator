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
    let arr = createArrayOfNumbers(iterations);

    //line of code to clarify numbers and operation
    console.log(`Your numbers are ${arr} and you want to ${operation} them...`);

    //remove zeros from array if dividing
    if (operation === "divide") {
        const firstElement = arr[0];
        arr = [firstElement].concat(arr.slice(1).filter((number) => number !== 0));
    }

    console.log(arr);

    //now perform the relevant operation

    const answer = arr.reduce(
        (accumulator, currentValue) => {
            switch (operation) {
                case "add":
                    return (accumulator + currentValue);
                case "subtract":
                    return (accumulator - currentValue);
                case "multiply":
                    return (accumulator * currentValue);
                case "divide":
                    return (accumulator / currentValue);
                default:
                    console.log('Sorry, something seems to have gone wrong. Try again?');
            }
        }
    );

    //finally, print the answer
    console.log(`
    The answer is ${answer}`);
}