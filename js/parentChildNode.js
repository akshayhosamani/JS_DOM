// var a=document.querySelector('#child-c').parentElement.style.background="white";    
// var b=document.querySelector('#inner').childElement;  
// console.log(a)
// console.log(b)
var a=document.getElementById('inner').children;   
console.log(a); 
var b=document.getElementById('inner').childNodes;
console.log(b); 
a[4].style.background="orange";  
b[4].style.background="orange";  
var c=document.getElementById('child-c').firstChild;
console.log(c)
// c.style.background="red"
// document.getElementById('child-c').lastChild.style.color="red"
// console.log(a)
// console.log(b)