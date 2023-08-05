const readline = require('readline-sync');

exports.ARITHMETIC_MODE = '1';
exports.VOWEL_COUNTING_MODE = '2';

exports.printWelcomeMessage = function() {
    console.log('Welcome to the calculator!');
    console.log('==========================');
}

exports.getStringInputWithPrompt = function(prompt) {
    console.log(`\n${prompt}`);
    return readline.prompt();
}

exports.getNumberInputWithPrompt = function(prompt) {
    const response = +exports.getStringInputWithPrompt(prompt);
    if (isNaN(response)) {
        console.log('This is not a number, please try again');
        return exports.getNumberInputWithPrompt(prompt);
    } else {
        return response;
    }
}

exports.getCalculationMode = function() {
    const response = exports.getStringInputWithPrompt(`Which calculator mode do you want?
    ${exports.ARITHMETIC_MODE})  Arithmetic
    ${exports.VOWEL_COUNTING_MODE})  Vowel counting`);
    if ( response === '1' || response === '2' ) {
        return response;
    } else {
        console.log(`Sorry, that is not a valid calculator mode.
        Please enter an integer from 1 to 2...`);
        return exports.getCalculationMode();
    }
}

const convertYNresponse = (response) => {
    if (response == "y" || response == "yes" || response == "yes please") {
        return true;
    } else {
        return false;
    }
}

exports.shouldCalculatorKeepRunning = function() {
    const response = exports.getStringInputWithPrompt('Would you like to perform another calculation?');
    return convertYNresponse(response);
}