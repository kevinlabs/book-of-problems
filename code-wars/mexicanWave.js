function wave(str) {
  // Code here
  var tempArray = str.toLowerCase().split('');
  var returnArray = [];
  var counter;
  var temp = [];

  for (var i = 0; i < tempArray.length; i++) {
    for (var i2 = 0; i2 < tempArray.length; i2++) {
      if (i === i2) {
        temp.push(tempArray[i2].toUpperCase());
      } else {
        temp.push(tempArray[i2]);
      }
    }

    temp = temp.join('');
    if (temp !== str) {
      returnArray.push(temp);
    }
    temp = [];
  }

  return returnArray;
}

console.log('Showing func: ', wave('two words'));