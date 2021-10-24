var obj={
      a:10
}
function fn(x,y){
      var b=x
      var c=y
      return this.a+b+c;
}
// console.log(fn.call(obj,2,3));
// console.log(fn.apply(obj,[2,3]))
var f=fn.bind(obj)
console.log(f(2,3));