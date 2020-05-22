function isValidSubsequence(array, sequence) {
  // Write your code here.
  var numHashMap = {};

  // Quick input validation.
  if (array == null || array.length < 1) {
    return false;
  }

  if (sequence == null || sequence.length < 1) {
    return false;
  }
  //==================

  for (let i = 0; i < array.length; i++) {
    if (numHashMap.hasOwnProperty(array[i])) {
      numHashMap[array[i]].count += 1;
      numHashMap[array[i]].index.push(i);
    } else {
      numHashMap[array[i]] = { count: 1, index: [i], indexCount: 0};
    }
  }

  let previousIndexVal = null;
  for (let i = 0; i < sequence.length; i++) {
    if (numHashMap.hasOwnProperty(sequence[i])) {

      //Valid order sequence verification
      if (i === 0) {
        previousIndexVal = numHashMap[sequence[i]].index[0];
        numHashMap[sequence[i]].indexCount += 1;
      } else {
        
        let targetIndexArrayLength = numHashMap[sequence[i]].index.length;
        let targetIndexCount = numHashMap[sequence[i]].indexCount;

        if(targetIndexArrayLength > 1 && targetIndexArrayLength > targetIndexCount) {
          if(targetIndexCount < 1) {
            if (previousIndexVal >= numHashMap[sequence[i]].index[0]) {
              return false;
            } else {
              previousIndexVal = numHashMap[sequence[i]].index[0];
              numHashMap[sequence[i]].indexCount += 1;
            }
          } else if (targetIndexCount >= 1) {
            if (previousIndexVal >= numHashMap[sequence[i]].index[targetIndexCount]) {
              return false;
            } else {
              previousIndexVal = numHashMap[sequence[i]].index[targetIndexCount];
              numHashMap[sequence[i]].indexCount += 1;
            }
          }
        } else {
          if (previousIndexVal >= numHashMap[sequence[i]].index[0]) {
            return false;
          } else {
            previousIndexVal = numHashMap[sequence[i]].index[0];
          }
        }
      }

      //Duplicate count verification
      if (numHashMap[sequence[i]].hasOwnProperty('validation')) {
        numHashMap[sequence[i]].validation += 1;

        if (numHashMap[sequence[i]].validation > numHashMap[sequence[i]].count) {
          return false;
        }
      } else {
        numHashMap[sequence[i]]['validation'] = 1;
      }
    } else {
      return false;
    }
  }

  return true;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;


/*
Big O: O^N  space: O^N

*/


//Duplicate number case.
// var test1 = [5, 1, 22, 25, 6, -1, 8, 10];
// var test2 = [5, 1, 22, 22, 25, 6, -1, 8, 10];

//Changed order sequence.
// var test1 = [5, 1, 22, 25, 6, -1, 8, 10];
// var test2 = [5, 1, 25, 22, 6, -1, 8, 10];

//Duplicate repeated numbers.
var test1 = [1, 1, 1, 1, 1];
var test2 = [1, 1, 1,];

console.log('Showing return val: ', isValidSubsequence(test1, test2));