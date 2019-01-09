firstNotRepeatingCharacter = s => {
  r = {};
  for (char of s) {
    r[char] = -~r[char];
  }
  for (char in r) {
    if (r[char] == 1)
      return char;
  }
  return '_';
}

// var s = 'abacabad';
// console.log('Result: ', firstNotRepeatingCharacter(s));