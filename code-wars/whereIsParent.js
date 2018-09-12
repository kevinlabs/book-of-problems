function findChildren(dancingBrigade) {
  var strArray = dancingBrigade.split('').sort();
  var returnArray = [];
  var listOfUpperCase = {};
  var listOfLowerCase = {};

  const upperReg = /[A-Z]/;
  const lowerReg = /[a-z]/;

  for (let i = 0; i < strArray.length; i++) {
    if (upperReg.test(strArray[i])) {
      if (listOfUpperCase[strArray[i]]) {
        listOfUpperCase[strArray[i]] += 1;
      } else {
        listOfUpperCase[strArray[i]] = 1;
      }
    } else if (lowerReg.test(strArray[i])) {
      if (listOfLowerCase[strArray[i]]) {
        listOfLowerCase[strArray[i]] += 1;
      } else {
        listOfLowerCase[strArray[i]] = 1;
      }
    }
  }

  for (let i = 65; i < 91; i++) {
    let targetAlphabet = String.fromCharCode(i);

    if (listOfUpperCase[targetAlphabet]) {
      if (listOfUpperCase[targetAlphabet] > 1) {
        for (let i = 0; i < listOfUpperCase[targetAlphabet]; i++) {
          returnArray.push(targetAlphabet);
        }
      } else {
        returnArray.push(targetAlphabet);
      }
    }

    if (listOfLowerCase[targetAlphabet.toLowerCase()]) {
      let lowerCaseAlphabet = targetAlphabet.toLowerCase();
      if (listOfLowerCase[lowerCaseAlphabet] > 1) {
        for (let i = 0; i < listOfLowerCase[lowerCaseAlphabet]; i++) {
          returnArray.push(lowerCaseAlphabet);
        }
      } else {
        returnArray.push(lowerCaseAlphabet);
      }
    }
  }

  return returnArray.join('');

}

findChildren("beeeEBb");