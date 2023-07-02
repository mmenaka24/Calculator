const readline = require('readline-sync');
console.log('Welcome to the calculator!');
console.log('==========================');

//first get operator and check that it is valid
console.log('\nPlease enter the operator:');
const operator = readline.prompt();
//need to declare the 'operation' variable here
//as if it is declared within each 'if' or 'else if' block
//it is only accessible within the scope of each block
//and not outside of it
let operation;

if (operator == "+" || operator == "plus" || operator == "add" || operator == "addition" || operator == "sum") {
    operation = "addition";
} else if (operator == "-" || operator == "minus" || operator == "subtract" || operator == "subtraction" || operator == "difference") {
    operation = "subtraction";
} else if (operator == "*" || operator == "x" || operator == "." || operator == "multiply" || operator == "multiplication" || operator == "product") {
    operation = "multiplication";
} else if (operator == "/" || operator == "divide" || operator == "division" || operator == "quotient") {
    operation = "division";
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

//now get the two numbers
console.log('Please enter the first number:');
const input1 = readline.prompt();
console.log('Please enter the second number');
const input2 = readline.prompt();

//now convert these to numbers rather than strings
const no1 = +input1
const no2 = +input2

//now perform the relevant operation, again declare the answer variable beforehand
let answer;
switch (operation) {
    case "addition":
        answer = no1 + no2;
        break;
    case "subtraction":
        answer = no1 - no2;
        break;
    case "multiplication":
        answer = no1 * no2;
        break;
    case "division":
        answer = no1 / no2;
        break;
    default:
        console.log('Sorry, something seems to have gone wrong. Try again?')
}

//finally, print the answer
console.log('The answer is ' + answer)






