const readline = require('readline-sync');
//functions are defined at the bottom of the code

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';

printWelcomeMessage();
let running = true;
while (running) {
    const calculationMode = getCalculationMode();
    if (calculationMode === ARITHMETIC_MODE) {
        performOneArithmeticCalculation()
    } else if (calculationMode === VOWEL_COUNTING_MODE) {
        performOneVowelCountingCalculation();
    }
}

function printWelcomeMessage() {
    console.log('Welcome to the calculator!');
    console.log('==========================');
}

function getCalculationMode() {
    const response = getStringInputWithPrompt(`Which calculator mode do you want?
    ${ARITHMETIC_MODE})  Arithmetic
    ${VOWEL_COUNTING_MODE})  Vowel counting`);
    if ( response === '1' || '2' ) {
        return response;
    } else {
        console.log(`Sorry, that is not a valid calculator mode.
        Please enter an integer from 1 to 2...`);
        getCalculationMode();
    }
}

function getStringInputWithPrompt(prompt) {
    console.log(`\n${prompt}`);
    return readline.prompt;
}

function performOneArithmeticCalculation() {
    //first get operator and check that it is valid
    const operator = getStringInputWithPrompt('Please enter the operator:');
    let operation = setOperationAndCheckValidity(operator);

    //ask how many numbers
    const iterations = getNumberInputWithPrompt(`How many numbers do you want to ${operation}?`);

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
    for (const i in iterations) {
        switch (operation) {
            case "add":
                answer += arr[i];
                break;
            case "subtract":
                answer -= arr[i];
                break;
            case "multiply":
                answer *= arr[i];
                break;
            case "divide":
                answer /= arr[i];
                break;
            default:
                console.log('Sorry, something seems to have gone wrong. Try again?');
        }
    }

    //finally, print the answer
    console.log(`
    The answer is ${answer}`);
    
    running = shouldCalculatorKeepRunning();
}

function setOperationAndCheckValidity(operator) {
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

function getNumberInputWithPrompt(prompt) {
    const response = +getStringInputWithPrompt(prompt);
    if (isNaN(response)) {
        console.log('This is not a number, please try again');
        getNumberInputWithPrompt(prompt);
    } else {
        return response;
    }
}

function createArrayOfNumbers(iterations) {
    let arr = Array(iterations);
    for (const i in iterations) {
        let again = false;
        do {
            const maybeNumber = getNumberInputWithPrompt(`Please enter number ${i+1}:`);
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

function shouldCalculatorKeepRunning() {
    const response = getStringInputWithPrompt('Would you like to perform another calculation?');
    return convertYNresponse(response);
}

function convertYNresponse(response) {
    if (response == "y" || response == "yes" || response == "yes please") {
        return true;
    } else {
        return false;
    }
}

function performOneVowelCountingCalculation() {
    const stringToCount = getStringInputWithPrompt('Please enter a string:').toUpperCase();

    const vowelArray = ['A', 'E', 'I', 'O', 'U'];

    vowelCount = countLettersInString(vowelArray, stringToCount);

    console.log('\nThe vowel counts are:');
    for (const vowel in vowelCount) {
        console.log(`  ${vowel}: ${vowelCount[vowel]}`)
    }

    running = shouldCalculatorKeepRunning();
}

function countLettersInString(lettersToCount, stringToCount) {
    let letterCounter = {};
    for (const i in lettersToCount) {
        letterCounter[lettersToCount[i]] = 0
    }

    for (let char of stringToCount) {
        if (lettersToCount.includes(char)) {
            letterCounter[char]++;
        }
    }

    return letterCounter;
}