function isValidSubsequence(array, sequence) {
  // Quick input validation.
  if (array == null || array.length < 1) {
    return false;
  }

  if (sequence == null || sequence.length < 1) {
    return false;
  }
  //==================

  let arrayIndex = 0;
  let sequenceIndex = 0;

  while(arrayIndex < array.length && sequenceIndex < sequence.length) {
    let arrayCurrentValue = array[arrayIndex];
    let sequenceTargetValue = sequence[sequenceIndex];

    if(arrayCurrentValue !== sequenceTargetValue) {
      arrayIndex += 1;
    } else if(arrayCurrentValue === sequenceTargetValue) {
      arrayIndex += 1;
      sequenceIndex += 1;
    }
  }

  if(sequenceIndex === sequence.length) {
    return true;
  } else if(arrayIndex === array.length) {
    return false;
  }

}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;


/*
Big O: O^N  space: O(1)

*/


//Duplicate number case. = false
// var test1 = [5, 1, 22, 25, 6, -1, 8, 10];
// var test2 = [5, 1, 22, 22, 25, 6, -1, 8, 10];

//Changed order sequence. = false
// var test1 = [5, 1, 22, 25, 6, -1, 8, 10];
// var test2 = [5, 1, 25, 22, 6, -1, 8, 10];

//Duplicate repeated numbers. = true
var test1 = [1, 1, 1, 1, 1];
var test2 = [1, 1, 1,];

console.log('Showing return val: ', isValidSubsequence(test1, test2));