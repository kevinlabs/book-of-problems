function rotateImage(a) {
  const horizontalLength = a[0].length;
  const verticalLength = a.length;
  var rotatedArray = [];
  var columnIndex = 0;
  var tempArray = [];

  for (let i = horizontalLength-1; columnIndex < horizontalLength; i--) {
    if (i < 0) {
      columnIndex += 1;
      i = horizontalLength-1;
      rotatedArray.push(tempArray);
      tempArray = [];
    }
    
    tempArray.push(a[i][columnIndex]);
  }

  return rotatedArray;
}

// var test = [[7, 4, 1],
// [8, 5, 2],
// [9, 6, 3]];

// console.log('Running function: ', rotateImage(test));

//Linear runtime of O(n)