// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  try{
      
      if(!(Array.isArray(A))) {
          throw new Error("Not array");
      } else if(K < 0 || A.length < 1) {
          throw new Error("Invalid input");
      }   
      
      for(let i =0; i < K; i++) {
          let lastIndexValue = A.pop();
          A.unshift(lastIndexValue);
      }
      
      return A;
  }
  catch(err){
      console.error("Error detected: ", err);
      return A;
  }
}
