// BigO: O(n) time && O(n) space

function twoNumberSum(arr, targetSum) {
  // Write your code here.
  var pairHashMap = {};

  if (!arr || !(Array.isArray(arr))) {
    return [];
  } else if (arr.length < 2) {
    return [];
  }

  for (let i = 0; i < arr.length; i++) {
    if (pairHashMap[arr[i]]) {
      if (pairHashMap[arr[i]].value + arr[i] === targetSum) {
        console.debug("Pair matched");

        if (arr[i] > pairHashMap[arr[i]].value) {
          return [pairHashMap[arr[i]].value, arr[i]];
        } else {
          return [arr[i], pairHashMap[arr[i]].value];
        }
      }
    } else {
      pairHashMap[targetSum - arr[i]] = { value: arr[i] };
    }
  }

  return [];
}


console.log("Returned Val: ", twoNumberSum([4, 6, 1], 5));
console.log("Returned Val: ", twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));


// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
