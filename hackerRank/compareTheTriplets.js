

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
  let loopTarget = a;
  let adjTarget = b;
  let finalScore = [0, 0];
  let isIndexFlipped = false;

  // Write your code here
  if (!a && !b) {
    return [0, 0]
  }

  if (a && b) {
    if (a.length > b.length) {
      loopTarget = a;
      adjTarget = b;
    } else if (b.length > a.length) {
      loopTarget = b;
      adjTarget = a;
      isIndexFlipped = true;
    }
  } else {
    if (a) {
      loopTarget = a;
      adjTarget = b;
    } else if (b) {
      loopTarget = b;
      adjTarget = a;
      isIndexFlipped = true;
    }
  }

  for (let i = 0; i < loopTarget.length; i++) {
    if (loopTarget[i] > adjTarget[i]) {
      if (isIndexFlipped) {
        finalScore[1] += 1;
      } else {
        finalScore[0] += 1;
      }
    } else if (loopTarget[i] < adjTarget[i]) {
      if (isIndexFlipped) {
        finalScore[0] += 1;
      } else {
        finalScore[1] += 1;
      }
    }
  }

  return finalScore;
}

compareTriplets([5, 6, 7], [3, 6, 10]);


/*
Input: Array of numbers

Edge: Empty array,
unparallel numbers,
point only on oneside does that count for point even though other side don't have score?

BigO: O(N) Linear
*/

