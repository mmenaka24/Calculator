const userInput = require('./userInput');
const arithmetic = require('./arithmetic');
const vowelCounting = require('./vowelCounting');

userInput.printWelcomeMessage();
let running = true;
while (running) {
    const calculationMode = userInput.getCalculationMode();
    if (calculationMode === userInput.ARITHMETIC_MODE) {
        arithmetic.performOneArithmeticCalculation()
    } else if (calculationMode === userInput.VOWEL_COUNTING_MODE) {
        vowelCounting.performOneVowelCountingCalculation();
    }
    running = userInput.shouldCalculatorKeepRunning();
}