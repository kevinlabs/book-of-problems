/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
  let hashMap = {};
  let pairCount = 0;

  // Write your code here
  if (!ar && ar.length < 1) {
    return 0;
  }

  for (let i = 0; i < ar.length; i++) {
    if(hashMap[ar[i]]) {
      hashMap[ar[i]] += 1;
    } else {
      hashMap[ar[i]] = 1;
    }
  }

  for (const number in hashMap) {
    if(hashMap[number] % 2 === 0) {
      pairCount += hashMap[number] / 2;
    } else if (hashMap[number] % 2 !== 0){
      if(!(hashMap[number] < 2)) {
        pairCount += (hashMap[number] - 1) / 2;
      } 
    }
  }

  return pairCount;
}


sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20])

/*
Input: n = number of socks
ar = array of color coded socks

Edge: Empty array

BigO: O(N) Linear

*/