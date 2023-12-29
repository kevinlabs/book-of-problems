const max_sub_array_of_size_k = function(k, arr) {
  
  let windowSum = 0,
  windowStartIndex = 0,
  saveArraySequence = [],
  maxSumNumber = 0;

  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];
    if(i >= k - 1) {
      if(maxSumNumber <= windowSum) {
        maxSumNumber = windowSum;
        saveArraySequence = arr.slice(windowStartIndex, i+1);
      }
      windowSum -= arr[windowStartIndex];
      windowStartIndex += 1;
    }
    
  }

  console.log('Array sequence was: ', saveArraySequence);
  return maxSumNumber;
};

max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])
//output 9
//explanation maximum sum array is [5, 1, 3]

// max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])



// big o: O(N)
// space complexity: O(1)
// 
