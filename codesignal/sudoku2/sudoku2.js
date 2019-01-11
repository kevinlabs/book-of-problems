function sudoku2(grid) {
  const verticalLength = 9;
  var map = {};
  var columnIndex = 0;
  var rowAlphabet = 65;

  for (let rowIndex = 0; rowIndex < verticalLength; columnIndex++) {
    if (columnIndex > 8) {
      rowIndex++;
      rowAlphabet++;
      columnIndex = 0;

      if(rowIndex === 9) {
        break;
      }
    }

    if (columnIndex < 3) {
      if (rowIndex < 3) {
        counter('b1', rowIndex, columnIndex);
      } else if (rowIndex < 6) {
        counter('b4', rowIndex, columnIndex);
      } else if (rowIndex < 9) {
        counter('b7', rowIndex, columnIndex);
      }
    } else if ( 2 < columnIndex && columnIndex < 6 ) {
      if (rowIndex < 3) {
        counter('b2', rowIndex, columnIndex);
      } else if (rowIndex < 6) {
        counter('b5', rowIndex, columnIndex);
      } else if (rowIndex < 9) {
        counter('b8', rowIndex, columnIndex);
      }
    } else if (5 < columnIndex && columnIndex < 9) {
      if (rowIndex < 3) {
        counter('b3', rowIndex, columnIndex);
      } else if (rowIndex < 6) {
        counter('b6', rowIndex, columnIndex);
      } else if (rowIndex < 9) {
        counter('b9', rowIndex, columnIndex);
      }
    }

    counter(columnIndex + 1, rowIndex, columnIndex);
    counter(String.fromCharCode(rowAlphabet), rowIndex, columnIndex);
  }

  if (map.mapInvalid) {
    return false;
  } else {
    return true;
  }

  function counter(target, rowIndex, columnIndex) {
    if (grid[rowIndex][columnIndex] !== '.') {
      if (map[target]) {
        if (map[target][grid[rowIndex][columnIndex]]) {
          map[target][grid[rowIndex][columnIndex]] += 1;
          map.mapInvalid = true;
        } else {
          map[target][grid[rowIndex][columnIndex]] = 1;
        }
      } else {
        map[target] = {};
        map[target][grid[rowIndex][columnIndex]] = 1;
      }
    }
  }
}

// Runtime should be constant O(1) because it has finite number. 



// console.time('test1');
// var tempGrid = [[".",".",".",".","8","1",".","1","7"], 
// [".",".","7",".",".",".",".",".","."], 
// [".",".",".",".",".",".","6",".","."], 
// [".",".",".",".","9",".",".",".","."], 
// [".",".","4",".",".","8","3","8","."], 
// [".",".",".",".",".",".",".",".","8"], 
// [".","5",".",".",".",".",".",".","."], 
// [".",".",".",".",".",".",".","7","."], 
// [".",".",".",".",".",".",".",".","."]];

// console.log('Running func: ', sudoku2(tempGrid));
// console.timeLog("test1");
