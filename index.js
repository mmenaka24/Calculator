const readline = require('readline-sync');
console.log('Welcome to the calculator!');
console.log('Please enter some input:');
const response = readline.prompt();

const no1 = parseFloat(response); //turns response from string into number

console.log('What would you like to multiply by?:');
const multiplier = readline.prompt();
const no2 = parseFloat(multiplier);


const answer = no1 * no2;
console.log(response + ' multiplied by ' + multiplier + ' is ' + answer + '!');

// Output the values and types of variables/constants
console.log('Value and type of response:', response, typeof response);
console.log('Value and type of no1:', no1, typeof no1);
console.log('Value and type of multiplier:', multiplier, typeof multiplier);
console.log('Value and type of no2:', no2, typeof no2);
console.log('Value and type of answer:', answer, typeof answer);