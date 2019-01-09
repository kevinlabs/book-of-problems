function firstDuplicate(a) {
  var dataMap = { smallest: { index: null, key: null, } };

  for (i = 0; i < a.length; i++) {
    if (dataMap[a[i]]) {
      dataMap[a[i]].lastIndex = i;
      dataMap[a[i]].repeated = true;
      if (dataMap.smallest.index === null) {
        dataMap.smallest.index = dataMap[a[i]]['lastIndex'];
        dataMap.smallest.key = a[i];
      } else if (dataMap[a[i]]['lastIndex'] < dataMap.smallest.index) {
        dataMap.smallest.index = dataMap[a[i]]['lastIndex'];
        dataMap.smallest.key = a[i];
      }
    } else {
      dataMap[a[i]] = { 'lastIndex': i };
    }
  }

  if (dataMap.smallest.key) {
    return dataMap.smallest.key;
  } else {
    return -1;
  }
}

// var a = [2, 1, 5, 3,]
// console.log('showing val: ', firstDuplicate(a));

// runtime should be O(n);