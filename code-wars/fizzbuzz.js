//https://www.codewars.com/kata/fibonaccis-fizzbuzz/train/javascript
//solved
//Write a function that counts to 30 and pushes each number to an array in sequence, starting with 1. if the number is divisble by 3, replace that number with"fizz". if divisible by 5 the number should be replaced by "buzz". numbers divisble by both 3 and 5 should be replaced with "fizz buzz"

// Example output: [1,2, fizz, 4, buzz]

function fizzBuzz(n) {
    var tempArray = [];
    for (var i = 1; i < n+1; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('Val pushed and fizzBuzz: ' + i);
            tempArray.push('FizzBuzz'); 
        } else if (i % 3 === 0) {
            console.log('Val pushed and Fizz: ' + i);
            tempArray.push('Fizz');
        } else if (i % 5 === 0) {
            console.log('Val pushed and Buzz: ' + i);
            tempArray.push('Buzz');
        }  else {
            tempArray.push(i);
        }
    }
    return tempArray;
}

console.log('Showing result: ', fizzBuzz(30));
console.log('Show me test ', 10 % 3, 10 % 5)