// Write a function in JavaScript that reverses a string.

function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}

// Example:
var originalString = 'Hello, World!';
var reversedString = reverseString(originalString);

console.log('Original String: ' + originalString);
console.log('Reversed String: ' + reversedString);