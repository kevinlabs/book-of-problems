// BigO: avg: O(nlogn) time | O(n) space
// BigO: worst: O(nlogn) time | O(n) space
// Space: n

function sortedSquaredArray(arr) {
  // Write your code here.
  let listOfSquared = [];

  for (let i = 0; i < arr.length; i++) {
    let squared = Math.pow(arr[i], 2);
    console.log(squared)

    listOfSquared.push(Math.pow(arr[i], 2))

  }

  
  
  return listOfSquared.sort((a, b) => a - b);
}


var input = [-10, -5, 0, 5, 10];

sortedSquaredArray(input);


// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
