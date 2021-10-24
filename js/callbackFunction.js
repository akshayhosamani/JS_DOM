let sum=(a,b)=> a+b;
let mul=(a,b)=>a*b;
let calculate=(a,b,callback)=>callback(a,b);
let output=calculate(10,20,sum)
console.log(output);
output=calculate(10,20,mul)
console.log(output);
output=calculate(10,20,callback=(a,b)=>a-b);
console.log(output);