firstDuplicate = arr => {
  r = new Set();
  for (num of arr)
      if (r.has(num))
          return num;
      else
          r.add(num);
  return -1;
}

var a = [2, 1, 3, 5, 3, 2];
console.log('showing val: ', firstDuplicate(a));