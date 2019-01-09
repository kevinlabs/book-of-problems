function firstNotRepeatingCharacter(s) {
  var dataMap = {};
  var firstNotRepeatingChar = { index: null, key: null, };

  for (i = 0; i < s.length; i++) {
    if (dataMap[s[i]]) {
      dataMap[s[i]].counted += 1;
    } else {
      dataMap[s[i]] = { 'firstIndex': i, 'counted': 1 };
    }
  }

  for (char in dataMap) {
    if (dataMap[char].counted === 1) {
      if (firstNotRepeatingChar.index) {
        if (dataMap[char].firstIndex < firstNotRepeatingChar.index) {
          firstNotRepeatingChar.index = dataMap[char].firstIndex;
          firstNotRepeatingChar.key = char;
        }
      } else {
        firstNotRepeatingChar.index = dataMap[char].firstIndex;
        firstNotRepeatingChar.key = char;
      }
    }
  }

  if (firstNotRepeatingChar.key) {
    return firstNotRepeatingChar.key;
  } else {
    return '_';
  }
}

//n(o) Linear runtime.

// var s = 'abacabad';
// console.log('Result: ', firstNotRepeatingCharacter(s));