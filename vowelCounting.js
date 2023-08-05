const userInput = require('./userInput');

const countLettersInString = (lettersToCount, stringToCount) => {
    let letterCounter = {};
    for (let i=0; i<lettersToCount.length; i++) {
        letterCounter[lettersToCount[i]] = 0
    }

    for (let char of stringToCount) {
        if (lettersToCount.includes(char)) {
            letterCounter[char]++;
        }
    }

    return letterCounter;
}

exports.performOneVowelCountingCalculation = function() {
    const stringToCount = userInput.getStringInputWithPrompt('Please enter a string:').toUpperCase();

    const vowelArray = ['A', 'E', 'I', 'O', 'U'];

    vowelCount = countLettersInString(vowelArray, stringToCount);

    console.log('\nThe vowel counts are:');
    for (const vowel in vowelCount) {
        console.log(`  ${vowel}: ${vowelCount[vowel]}`)
    }
}