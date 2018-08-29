//https://www.codewars.com/kata/pick-peaks/train/javascript

function pickPeaks(arr){
    var counter = {};
    var maxNum = 0;
    for(var i = 0; i < arr.length; i++) {

    }
}

function findPeaks(arr) {
  var peak;
  return arr.reduce(function(peaks, val, i) {
    if (arr[i+1] > arr[i]) {
      peak = arr[i+1];
    } else if ((arr[i+1] < arr[i]) && (typeof peak === 'number')) {
      peaks.push(peak);
      peak = undefined;
    }
    return peaks;
  }, []);
}

findPeaks([1,3,2,5,3])   // -> [3, 5]
findPeaks([1,3,3,3,2])   // -> [3]
findPeaks([-1,0,0,-1,3]) // -> [0]
findPeaks([5,3,3,3,4])   // -> []
//First array element dose not count
//Last array element dose not count.