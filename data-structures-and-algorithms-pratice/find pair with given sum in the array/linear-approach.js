function findPair(arr, sum) {
  var pairs = {};
  var hashPairs = {};

  if (arr.length > 0 && sum !== undefined) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] + arr[i] === sum) {
        pairs[arr[i]] = { keyIndex: i, matchingVal: arr[i], matchIndex: i, };
        foundPairs(i, i, arr[i], arr[i]);
      }

      if (hashPairs[arr[i]]) {
        pairs[arr[i]] = { keyIndex: i, matchingVal: hashPairs[arr[i]].val, matchIndex: hashPairs[arr[i]].index, };
        foundPairs(i, hashPairs[arr[i]].index, arr[i], hashPairs[arr[i]].val);
      } else if (arr[i] <= sum) {
        hashPairs[(sum - arr[i])] = { val: arr[i], index: i };
      }
    }
  }

  console.log('Pair not found.');
}

function foundPairs(index1, index2, val1, val2) {
  console.log(`Pair found at index ${index1} and ${index2} (${arr[index1]} + ${arr[index2]})`);
}


var arr = [10, 8, 7, 2, 5, 3, 1, 0,];
var sum = 10;

findPair(arr, sum);


// This approach removes the duplicate pairs and runs on linear runtime.
// constraint: negative numbers.
// O(n)