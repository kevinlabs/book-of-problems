// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  console.debug("Showing test input: ", N);

  try {
    if (!(N) || typeof (N) !== 'number' || N < 1) {
      throw new Error("Invalid input type.");
    }

    const binaryString = (N >>> 0).toString(2);
    var greatestGap = 0;
    var counter = null;
    var lastStartIndex = null;

    console.debug("Binary View: ", binaryString);

    for (let i = 0; i < binaryString.length; i++) {
      if (i === 0) {
        continue
      }

      if (binaryString[i - 1] === '1' && binaryString[i] === '0') {
        lastStartIndex = i;
        counter = 1;
      } else if (binaryString[i - 1] === '0' && counter >= 1 && binaryString[i] === '0' && lastStartIndex != null) {
        counter += 1;
      } else if (binaryString[i - 1] === '0' && counter >= 1 && binaryString[i] === '1' && lastStartIndex != null) {
        if (counter >= greatestGap) {
          greatestGap = counter;
        }
        counter = null;
        lastStartIndex = null;
      }
    }

    console.debug("greatest gap is : ", greatestGap);

    return greatestGap;
  }
  catch (err) {
    console.debug("Log error: ", err);
    return 0;
  }
}


// solution(1041);
// solution(15);
// solution(32);


