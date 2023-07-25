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
    console.log(`Which calculator mode do you want?
     1)  Arithmetic
     2)  Vowel counting`);
    const inputString = readline.prompt();
    if ( inputString === '1' || '2' ) {
        return inputString;
    } else {
        console.log(`Sorry, that is not a valid calculator mode.
        Please enter an integer from 1 to 2...`);
        getCalculationMode();
    }
}

function performOneArithmeticCalculation() {
    //first get operator and check that it is valid
    console.log('\nPlease enter the operator:');
    const operator = readline.prompt();
    let operation = setOperationAndCheckValidity(operator);

    //ask how many numbers
    const iterations = takeUserInputConvert(`How many numbers do you want to ${operation}?`);

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
    for (let i = 1; i < iterations; i++) {
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

function takeUserInputConvert(String) {
    console.log(String);
    const inputString = readline.prompt();
    const input = +inputString;
    return input;
}

function createArrayOfNumbers(iterations) {
    let arr = Array(iterations);
    for (let i = 0; i < iterations; i++) {
        let again = false;
        do {
            const maybeNumber = takeUserInputConvert(`Please enter number ${i+1}:`);
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
    console.log('\nWould you like to perform another calculation?');
    const response = readline.prompt();
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
    console.log('\nPlease enter a string:');
    const stringToCount = readline.prompt('Please enter a string').toUpperCase();

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

    for (let step = 0; step < stringToCount.length; step++) {
        const letter = stringToCount.charAt(step+1);
        if (lettersToCount.includes(letter)) {
            letterCounter[letter]++;
        }
    }

    return letterCounter;
}