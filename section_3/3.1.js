// Write a JavaScript function that takes two parameters and returns their sum.

function sum(a, b) {
    if (typeof (a) !== 'number' || typeof (b) !== 'number') return 'Please kuwa serious and provide numbers';
    else return a + b;
}

// Example 1
const result1 = sum('Hello', 1);
console.log('Result (1) = ', result1);

// Example 2
const result2 = sum(10, 25);
console.log('Result (2) = ', result2);