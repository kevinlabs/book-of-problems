function smallest_subarray_sum(s, arr) {
  let windowStart = 0;
  let minLength = Infinity;
  let windowSum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  if (minLength === Infinity) {
    return 0;
  }

  return minLength;
}

smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2])


smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2])
//length 2


smallest_subarray_sum(19, [3, 4, 7, 1, 1, 1, 1, 1, 1, 6])
//length 8.