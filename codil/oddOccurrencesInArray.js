// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  var hashMap = {};

  try {

    if (!(Array.isArray(A))) {
      throw new Error("Invalid input");
    } else if (A.length < 1) {
      throw new Error("Empty array");
    }

    for (let i = 0; i < A.length; i++) {
      if (hashMap.hasOwnProperty(A[i])) {
        hashMap[A[i]].count += 1;
      } else {
        hashMap[A[i]] = { count: 1 };
      }
    }

    for (let number in hashMap) {
      if (hashMap[number]['count'] % 2 === 1) {
        console.log("Found the unpair: ", number);
        return parseInt(number);
      }
    }

    console.log("Unable to find unpair.");

    return;
  }
  catch (err) {
    console.error("Error: ", err)
    return;
  }
}


/*

Input: Odd inte
EDGE: Empty array,
-What if you have multiple unpaired value? Do we return array?
Output: Find the unpair value

BigO: O(N) Linear 

*/