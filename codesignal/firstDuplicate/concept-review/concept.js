function firstDuplicate(arr) {
  for (var i = 0; i < arr.length; i++) {
      var num = arr[i];
      if ( arr[Math.abs(num) - 1] > 0 ) {
          arr[Math.abs(num) - 1] = -1 * arr[Math.abs(num) - 1];
      }
      else {
          return Math.abs(num);
      }
  }
  
  return -1;
}

var a = [2, 1, 3, 5, 3, 2];
console.log('showing val: ', firstDuplicate(a));