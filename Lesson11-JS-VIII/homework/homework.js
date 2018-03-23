// Do not change any of the function names

// solve these recursively
//let result=1;
function nFactorial(n,result) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  if(result===undefined)
  {
    result=1;
  }
  if(n<1)
{
    return result;
  }
    else
  {
    result=result*n;
   return nFactorial(n-1,result);
    // return result;
  }

}

const arr=[];
function nFibonacci(n,temp,newtemp) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  
  if (newtemp===undefined)
  {
    newtemp=1;
      arr.length=0;
    arr.push(newtemp);
  }
console.log("newtemp---"+newtemp);
if(temp===undefined)
{
  temp=1;
}
 if(arr.length<n){
   temp=newtemp+temp;console.log("temp--"+temp);
   arr.push(temp);
   newtemp=arr[arr.length-2];
  return nFibonacci(n,temp,newtemp);
 }
   return arr.pop();
  
}

  // Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};