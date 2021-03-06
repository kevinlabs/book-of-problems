function findPair(arr, sum) {
  var pairs = {};

  if (arr.length > 0 && sum !== undefined) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {

        if (arr[i] + arr[j] === sum) {
          if (pairs[arr[j]] === arr[i]) {
            break;
          } else {
            pairs[arr[i]] = arr[j];
          }
          console.log(`Pair found at index ${i} and ${j} (${arr[i]}+${arr[j]})`);
        }

      }
    }
  }
}

var arr = [8, 7, 2, 5, 3, 1];
var sum = 10;

findPair(arr, sum);


// This approach removes the duplicate pairs.
// O(n^2)